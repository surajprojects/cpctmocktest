import { TriangleAlert } from "lucide-react";
import QuizResultOption from "./quizResultOption";

export default function QuizResultQuestionCard() {
    return (
        <>
            <div className="shadow-xs border border-gray-200 rounded-xl p-6 bg-white">
                <div className="flex justify-between">
                    <p className="text-gray-500 font-sans text-sm font-medium">Question 1</p>
                    <TriangleAlert className="size-5 text-gray-500 font-sans" />
                </div>
                <p className="mt-1 font-semibold text-lg font-sans">What is the capital of France?</p>
                <div className="my-5 grid grid-cols-1 gap-y-4">
                    <QuizResultOption wrong={true} />
                    <QuizResultOption />
                    <QuizResultOption correct={true} />
                    <QuizResultOption />
                </div>
                <p className="italic text-gray-500 font-sans text-sm">You did not answer this question</p>
            </div>
        </>
    );
};