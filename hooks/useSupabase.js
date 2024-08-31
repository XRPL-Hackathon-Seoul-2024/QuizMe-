import { createClient } from "@supabase/supabase-js";
import { useEffect } from "react";

export const useSupabase = () => {
  const supabase = createClient(
    "https://uquqmvtzfetzgkkwbrkf.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxdXFtdnR6ZmV0emdra3dicmtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3NzYzOTAsImV4cCI6MjAzOTM1MjM5MH0.qgdi6xlqVeUxIzE27geittS2rGhsI06N5YdgMISk6kI",
  );

  const queryQuizData = async () => {
    const { data, error } = await supabase.from("Quiz").select("*");
    return data;
  };

  const getProblemsForQuiz = async (quizId) => {
    const { data, error } = await supabase
      .from("Problem")
      .select("*")
      .eq("problem_of", quizId);

    data.forEach(async (dat) => {
      if (dat.type === "multiple-choice") {
        const { data: msData, error } = await supabase
          .from("MultiSelectOptions")
          .select("*")
          .eq("option_of", dat.pId);

        dat.options = msData;
      }
    });
    console.log(data);

    return data;
  };

  const createNewQuiz = async (quizName) => {
    const { data, error } = await supabase
      .from("Quiz")
      .insert([{ title: quizName }])
      .select();
    return data;
  };

  return {
    queryQuizData,
    getProblemsForQuiz,
    createNewQuiz,
  };
};
