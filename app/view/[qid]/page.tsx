"use client";

import { CompoenentViewer } from "@/components/component-viewer";
import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";

import { WagmiProvider } from "wagmi";
import { config } from "../../../hooks/config";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const isTime = true;
  const queryClient = new QueryClient();
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const time = new Date();
    const time2 = new Date("2024.09.1 14:00");
    setTimeLeft(Math.floor(Number(time2 - time) / 1000));
  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div>
          <div className="hidden absolute flex justify-center z-10 w-[40rem] max-w-md h-[100rem] bg-black bg-opacity-[40%]">
            <div className="absolute z-20 w-[20rem] h-[30rem] bg-white shadow-lg mt-40 rounded-xl border-solid border-black border-4 flex flex-col items-center justify-center">
              <div className="font-bold text-2xl mb-10">Share to solve!</div>
              <QRCode value="http:naver.com" className="w-40 h-40" />
              <div></div>
            </div>
          </div>
          <div className="h-20 flex items-center border-solid border-b-8 border-b-[#e5e7eb] w-[39rem] max-w-md mx-auto mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 ml-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
              />
            </svg>

            <div className="px-4 w-full font-medium text-lg">
              XRP Hack Quiz!
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 ml-auto mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              />
            </svg>
          </div>
          {!isTime && (
            <div className="relative max-w-md mx-auto">
              <div>
                <img className="max-w-md" src="/notyet.png" />
                <div className="absolute text-white text-lg font-bold left-16 top-48 text-center">
                  <div>You have</div>
                  <div>
                    <TimeDecreaseWidget initialTime={timeLeft} />
                  </div>
                  <div>to solve this QUIZ!</div>
                </div>
              </div>
              <div className="w-full h-48 p-10 w-[39rem] max-w-md">
                <div className="border border-gray-200 rounded-xl border-2 h-48 p-8">
                  <div className="font-normal text-center text-2xl font-bold mb-4">
                    2024.09.12 14:00
                  </div>
                  <div className="flex flex-row gap-4 text-xl font-medium">
                    <div className="w-16">Quiz</div>
                    <div>:</div>
                    <div className="font-normal">XRP Hack Quiz!</div>
                  </div>
                  <div className="flex flex-row gap-4 text-xl font-medium">
                    <div className="w-16">Total</div>
                    <div>:</div>
                    <div className="font-normal">10 Questions</div>
                  </div>
                  <div className="flex flex-row gap-4 text-xl font-medium">
                    <div className="w-16">Reward</div>
                    <div>:</div>
                    <div className="font-normal text-red-700">Not Avalable</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isTime && <CompoenentViewer />}
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

const TimeDecreaseWidget = ({ initialTime = 60 }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    setTime(initialTime);
  }, [initialTime]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return <div className="text-4xl font-mono">{formatTime(time)}</div>;
};
