import { TriangleAlert } from "lucide-react";
import QuizResultOption from "./quizResultOption";
import clsx from "clsx";

export default function QuizResultQuestionCard({
    questionNo = 1,
    isHindiSelected = false,
    // Answer
    userAnswer = undefined,
    correctAnswer = "D",
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
    isHindiSelected?: boolean,
    // Answer
    userAnswer?: "A" | "B" | "C" | "D" | undefined,
    correctAnswer: "A" | "B" | "C" | "D",
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
    const labels = ["A", "B", "C", "D"];
    const options = [
        {
            en: optionAEn,
            hi: optionAHi,
        },
        {
            en: optionBEn,
            hi: optionBHi,
        },
        {
            en: optionCEn,
            hi: optionCHi,
        },
        {
            en: optionDEn,
            hi: optionDHi,
        },
    ];
    const isUserAnswerCorrect = userAnswer === correctAnswer;
    return (
        <>
            <div className={clsx("shadow-xs border  rounded-xl p-6 ", userAnswer ? isUserAnswerCorrect ? "border-green-600 bg-green-50/50" : "border-red-600 bg-red-50/50" : "bg-white border-gray-200")}>
                <div className="flex justify-between">
                    <p className="text-gray-500 font-sans text-sm font-medium">Question {questionNo}</p>
                    {!userAnswer && <TriangleAlert className="size-5 text-gray-500 font-sans" />}
                </div>
                <p className="mt-1 font-semibold text-lg font-sans">{isHindiSelected ? questionHi : questionEn}</p>
                <div className="my-5 grid grid-cols-1 gap-y-4">
                    {labels.map((label, idx) => {
                        return <QuizResultOption
                            key={idx + 1}
                            text={isHindiSelected ? options[idx].hi : options[idx].en}
                            label={label as "A" | "B" | "C" | "D"}
                            correct={label === correctAnswer}
                            wrong={userAnswer ? !isUserAnswerCorrect && (label === userAnswer) : false}
                        />
                    })}
                </div>
                {!userAnswer && <p className="italic text-gray-500 font-sans text-sm">You did not answer this question</p>}
            </div>
        </>
    );
};