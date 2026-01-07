"use client"

import { useRef, useState } from "react";
import QuizMode, { userAnswersType } from "@/components/quiz/quizMode";
import QuizResult from "@/components/quiz/quizResult";
import StartQuizCard from "@/components/quiz/startQuizCard";
import QuizResultQuestionCard from "@/components/quiz/quizResultQuestionCard";
import { seedData } from "@/utils/seed";

export default function MockTest() {
    const [startQuiz, setStartQuiz] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const allQuestions = useRef(seedData.mockTest.questions);
    const [userAnswers, setUserAnswers] = useState<userAnswersType[]>(allQuestions.current.map((question, idx) => {
        return {
            questionId: question.id,
            questionNo: (idx + 1),
            isMarkedForReview: false,
            selectedAnswer: undefined,
        };
    }));

    const totalQuestion = allQuestions.current.length;

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
        const checkedUserAnswer = userAnswers.filter((userAnswer) => {
            const foundQuestion = allQuestions.current.find((question) => userAnswer.questionId === question.id);
            if (foundQuestion) return userAnswer.selectedAnswer === foundQuestion.correctOption;
        });

        return (
            <>
                <div className="grow p-16 px-44 flex flex-col gap-y-8">
                    <QuizResult
                        totalQuestions={totalQuestion}
                        correctAnswers={checkedUserAnswer.length}
                    />
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

    return (
        <>
            <QuizMode
                setIsSubmitted={setIsSubmitted}
                userAnswers={userAnswers}
                setUserAnswers={setUserAnswers}
                allQuestions={allQuestions}
            />
        </>
    );
};