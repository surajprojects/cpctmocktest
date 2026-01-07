import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../ui/button";
import QuizOption from "./quizOption";
import { BookmarkMinus } from "lucide-react";
import { userAnswersType } from "./quizMode";
import clsx from "clsx";

export default function QuizQuestion({
    questionNo = 1,
    totalQuestions = 1,
    isHindiSelected = false,
    // User Answer
    userAnswers,
    setUserAnswers,
    // Question
    questionEn = "A thread in an OS is a/an ______.",
    questionHi = "OS में, थ्रेड एक ______ होती है।",
    // Option A
    optionAEn = "heavy weight process",
    optionAHi = "भारी प्रक्रिया (Heavy weight process)",
    // Option B
    optionBEn = "multi-process",
    optionBHi = "बहु-प्रक्रिया (Multi-process)",
    // Option C
    optionCEn = "inter thread process",
    optionCHi = "इंटर-थ्रेड प्रक्रिया (Inter thread process)",
    // Option D
    optionDEn = "light weight process",
    optionDHi = "हल्की प्रक्रिया (Light weight process)",
}: {
    questionNo?: number,
    totalQuestions?: number,
    isHindiSelected?: boolean,
    // User Answer
    userAnswers: userAnswersType[],
    setUserAnswers: Dispatch<SetStateAction<userAnswersType[]>>,
    // Question
    questionEn?: string,
    questionHi?: string,
    // Option A
    optionAEn?: string,
    optionAHi?: string,
    // Option B
    optionBEn?: string,
    optionBHi?: string,
    // Option C
    optionCEn?: string,
    optionCHi?: string,
    // Option D
    optionDEn?: string,
    optionDHi?: string,
}) {
    const currentQuestion = userAnswers.find((question) => question.questionNo === questionNo);

    const handleOptionSelect = (label: "A" | "B" | "C" | "D" | undefined) => {
        if (currentQuestion) {
            setUserAnswers((prevData) => prevData.map((userAnswer) => {
                if (userAnswer.questionNo === currentQuestion.questionNo) {
                    return { ...userAnswer, selectedAnswer: label };
                }
                return userAnswer;
            }));
        }
    };

    const handleMarkForReview = () => {
        if (currentQuestion) {
            setUserAnswers((prevData) => prevData.map((userAnswer) => {
                if (userAnswer.questionNo === currentQuestion.questionNo) {
                    return {
                        ...userAnswer,
                        isMarkedForReview: !(userAnswer.isMarkedForReview)
                    };
                }
                return userAnswer;
            }));
        }
    };

    return (
        <>
            <div className="shadow-sm border border-gray-200 rounded-xl p-5 md:p-6 bg-white">
                <div className="flex justify-between">
                    {/* Title */}
                    <p className="text-gray-500 font-sans text-sm md:text-base">Question {questionNo} of {totalQuestions}</p>
                    {/* Mark for Review Button */}
                    <Button
                        onClick={handleMarkForReview}
                        variant="outline"
                        className={clsx("cursor-pointer transition duration-300 ease-in-out", currentQuestion && currentQuestion.isMarkedForReview && "bg-amber-100 border-amber-500 text-amber-600 hover:bg-amber-200/60 hover:text-amber-600")}
                    >
                        <BookmarkMinus className="size-3.5" />
                        <p className="text-xs">Mark for Review</p>
                    </Button>
                </div>
                {/* Question */}
                <p className="mt-0 md:mt-2 mb-4 md:mb-6 font-semibold text-lg md:text-xl">{isHindiSelected ? questionHi : questionEn}</p>
                {/* Options */}
                <div className="grid grid-cols-1 gap-y-4">
                    {/* Option A */}
                    <QuizOption
                        key={1}
                        text={isHindiSelected ? optionAHi : optionAEn}
                        label="A"
                        isSelected={userAnswers.find((question) => question.questionNo === questionNo)?.selectedAnswer === "A"}
                        handleOptionSelect={handleOptionSelect}
                    />
                    {/* Option B */}
                    <QuizOption
                        key={2}
                        text={isHindiSelected ? optionBHi : optionBEn}
                        label="B"
                        isSelected={userAnswers.find((question) => question.questionNo === questionNo)?.selectedAnswer === "B"}
                        handleOptionSelect={handleOptionSelect}
                    />
                    {/* Option C */}
                    <QuizOption
                        key={3}
                        text={isHindiSelected ? optionCHi : optionCEn}
                        label="C"
                        isSelected={userAnswers.find((question) => question.questionNo === questionNo)?.selectedAnswer === "C"}
                        handleOptionSelect={handleOptionSelect}
                    />
                    {/* Option D */}
                    <QuizOption
                        key={4}
                        text={isHindiSelected ? optionDHi : optionDEn}
                        label="D"
                        isSelected={userAnswers.find((question) => question.questionNo === questionNo)?.selectedAnswer === "D"}
                        handleOptionSelect={handleOptionSelect}
                    />
                </div>
            </div>
        </>
    );
};