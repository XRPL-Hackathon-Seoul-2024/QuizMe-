import { Button } from "../ui/button";
import { useState } from "react";

export function OX(props) {
  const question = props.question;

  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className="flex flex-row gap-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="97"
        height="97"
        viewBox="0 0 97 97"
        fill="none"
      >
        <rect
          x="0.750012"
          y="0.565625"
          width="95.7"
          height="95.7"
          rx="17.05"
          fill="white"
        />
        <rect
          x="0.750012"
          y="0.565625"
          width="95.7"
          height="95.7"
          rx="17.05"
          stroke="#767676"
          strokeWidth="1.1"
        />
        <g filter="url(#filter0_d_9_1555)">
          <path
            d="M48.05 77.0153C30.6563 77.0153 17.8 64.6879 17.8 47.8653C17.8 31.0428 30.6563 18.7153 48.05 18.7153C65.4438 18.7153 78.3001 31.0428 78.3001 47.8653C78.3001 64.6879 65.4438 77.0153 48.05 77.0153ZM48.05 65.8457C58.225 65.8457 65.7875 58.2858 65.7875 47.8653C65.7875 37.3768 58.225 29.885 48.05 29.885C37.8751 29.885 30.3125 37.3768 30.3125 47.8653C30.3125 58.2858 37.8751 65.8457 48.05 65.8457Z"
            fill="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_9_1555"
            x="17.8"
            y="18.7153"
            width="62.7"
            height="60.4998"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2.2" dy="2.2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.85098 0 0 0 0 0.929412 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_9_1555"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_9_1555"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="97"
        height="97"
        viewBox="0 0 97 97"
        fill="none"
      >
        <rect
          x="0.55"
          y="0.565625"
          width="95.7"
          height="95.7"
          rx="17.05"
          fill="white"
        />
        <rect
          x="0.55"
          y="0.565625"
          width="95.7"
          height="95.7"
          rx="17.05"
          stroke="#767676"
          strokeWidth="1.1"
        />
        <g filter="url(#filter0_d_9_1557)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.3355 22.8775C29.7194 20.2615 25.478 20.2615 22.862 22.8775C20.246 25.4935 20.246 29.7349 22.862 32.351L38.9266 48.4156L22.8621 64.4801C20.2461 67.0961 20.2461 71.3375 22.8621 73.9535C25.4781 76.5695 29.7195 76.5695 32.3355 73.9535L48.4 57.889L64.4646 73.9535C67.0806 76.5695 71.322 76.5695 73.938 73.9535C76.554 71.3375 76.554 67.0961 73.938 64.4801L57.8735 48.4156L73.9381 32.351C76.5541 29.7349 76.5541 25.4935 73.9381 22.8775C71.3221 20.2615 67.0807 20.2615 64.4646 22.8775L48.4 38.9421L32.3355 22.8775Z"
            fill="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_9_1557"
            x="20.9"
            y="20.9155"
            width="57.2001"
            height="57.2"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2.2" dy="2.2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 0.854902 0 0 0 0 0.847059 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_9_1557"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_9_1557"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
