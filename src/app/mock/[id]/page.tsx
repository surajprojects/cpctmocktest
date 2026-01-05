"use client"

import { useState } from "react";
import QuizHeader from "@/components/quiz/quizHeader";
import QuizResult from "@/components/quiz/quizResult";
import QuizSummary from "@/components/quiz/quizSummary";
import QuizQuestion from "@/components/quiz/quizQuestion";
import StartQuizCard from "@/components/quiz/startQuizCard";
import QuizNavigation from "@/components/quiz/quizNavigation";
import QuizResultQuestionCard from "@/components/quiz/quizResultQuestionCard";
import QuizMode from "@/components/quiz/quizMode";

export default function MockTest() {
    const [startQuiz, setStartQuiz] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    if (!startQuiz) {
        return (
            <>
                <div className="grow flex justify-center items-center">
                    <StartQuizCard setStartQuiz={setStartQuiz} />
                </div>
            </>
        );
    }

    if (isSubmitted) {
        return (
            <>
                <div className="grow p-16 px-44 flex flex-col gap-y-8">
                    <QuizResult />
                    <div className="shadow-lg border border-gray-200 rounded-xl p-6 bg-white hover:shadow-xl transition duration-300 ease-in-out">
                        <p className="font-sans font-semibold">Detailed Review</p>
                        <p className="font-sans text-gray-500 text-sm mt-0.5 mb-5">See your answers for each question</p>
                        <div className="grid grid-cols-1 gap-y-6">
                            <QuizResultQuestionCard />
                            <QuizResultQuestionCard />
                            <QuizResultQuestionCard />
                            <QuizResultQuestionCard />
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return <QuizMode />;
};