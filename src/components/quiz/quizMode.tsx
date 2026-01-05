import QuizHeader from "./quizHeader";
import QuizSummary from "./quizSummary";
import QuizQuestion from "./quizQuestion";
import QuizNavigation from "./quizNavigation";
import { seedData } from "@/utils/seed";
import { useState } from "react";

export default function QuizMode() {
    const [currentQuestionId, setCurrentQuestionId] = useState<string>("1");
    return (
        <>
            <QuizHeader />
            <div className="grow p-7 lg:p-9 flex flex-col md:flex-row gap-8">
                <div className="flex flex-col gap-6 md:gap-8 grow-12">
                    <QuizQuestion />
                    <QuizNavigation />
                </div>
                <QuizSummary />
            </div>
        </>
    );
};