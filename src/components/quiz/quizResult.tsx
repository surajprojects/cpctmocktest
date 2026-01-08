import Btn from "../ui/btn";
import Link from "next/link";
import { Award, CircleCheck, CircleMinus, Home, RotateCcw, ThumbsUp, TriangleAlert } from "lucide-react";
import clsx from "clsx";

function getPerformanceLabel(score: number) {
    if (score <= 33) return "Needs Improvement"
    if (score <= 49) return "Fair Attempt"
    if (score <= 69) return "Good Performance"
    if (score <= 84) return "Very Good"
    return "Excellent"
};

export default function QuizResult({
    totalQuestions = 4,
    correctAnswers = 1,
    handleRetakeTest,
}: {
    totalQuestions?: number,
    correctAnswers?: number,
    handleRetakeTest: () => void,
}) {
    const scorePercentage = ((correctAnswers / totalQuestions) * 100).toPrecision(2);
    return (
        <>
            <div className="shadow-lg border border-gray-200 rounded-xl p-6 bg-white hover:shadow-xl transition duration-300 ease-in-out">
                <div className="flex flex-col items-center mb-16">
                    <div className={clsx("p-6 rounded-full mb-5", (Number(scorePercentage) <= 33) ? "bg-red-100/75" : (Number(scorePercentage) <= 49) ? "bg-amber-100/75" : (Number(scorePercentage) <= 69) ? "bg-blue-100/75" : (Number(scorePercentage) <= 84) ? "bg-green-100/75" : "bg-emerald-100/75")}>
                        {(Number(scorePercentage) <= 33) ? <TriangleAlert className={`size-16 text-red-500`} /> : (Number(scorePercentage) <= 49) ? <CircleMinus className={`size-16 text-amber-500`} /> : (Number(scorePercentage) <= 69) ? <CircleCheck className={`size-16 text-blue-500`} /> : (Number(scorePercentage) <= 84) ? <ThumbsUp className={`size-16 text-green-500`} /> : <Award className={`size-16 text-emerald-500`} />}
                    </div>
                    <p className="font-sans text-3xl font-semibold">Test Completed</p>
                    <p className="font-sans text-gray-500 mt-2">Keep practicing to improve your score.</p>
                </div>
                <div className="grid grid-cols-3 gap-6 my-10">
                    <div className="bg-blue-50 rounded-lg flex flex-col justify-center items-center py-6">
                        <p className="font-sans text-blue-600 font-bold text-4xl">{correctAnswers}/{totalQuestions}</p>
                        <p className="text-sm font-sans text-blue-500 font-medium mt-2">Correct Answers</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg flex flex-col justify-center items-center py-6">
                        <p className="font-sans text-black font-bold text-4xl">{scorePercentage}%</p>
                        <p className="text-sm font-sans text-gray-500 font-medium mt-2">Score Percentage</p>
                    </div>
                    <div className={clsx("rounded-lg flex flex-col justify-center items-center py-6", (Number(scorePercentage) <= 33) ? "bg-red-100/75" : (Number(scorePercentage) <= 49) ? "bg-amber-100/75" : (Number(scorePercentage) <= 69) ? "bg-blue-100/75" : (Number(scorePercentage) <= 84) ? "bg-green-100/75" : "bg-emerald-100/75")}>
                        <p className={clsx("font-sans font-bold text-2xl ", (Number(scorePercentage) <= 33) ? "text-red-500" : (Number(scorePercentage) <= 49) ? "text-amber-500" : (Number(scorePercentage) <= 69) ? "text-blue-500" : (Number(scorePercentage) <= 84) ? "text-green-500" : "text-emerald-500")}>
                            {getPerformanceLabel(Number(scorePercentage)).toUpperCase()}
                        </p>
                        <p className={clsx("text-sm font-sans font-medium mt-2 ", (Number(scorePercentage) <= 33) ? "text-red-500" : (Number(scorePercentage) <= 49) ? "text-amber-500" : (Number(scorePercentage) <= 69) ? "text-blue-500" : (Number(scorePercentage) <= 84) ? "text-green-500" : "text-emerald-500")}>
                            Status
                        </p>
                    </div>
                </div>
                <div className="flex gap-x-4">
                    <Btn
                        handleClick={handleRetakeTest}
                    >
                        <div className="flex justify-center items-center w-full">
                            <RotateCcw className="size-4 mr-2" />
                            <p>Retake Test</p>
                        </div>
                    </Btn>
                    <Link
                        href="/"
                        className="font-sans w-full text-sm font-medium py-2 rounded-lg hover:cursor-pointer duration-300 ease-out outline-none bg-white hover:bg-gray-100 border-2 border-gray-200/70 text-black"
                    >
                        <div className="flex justify-center items-center w-full">
                            <Home className="size-4 mr-2" />
                            <p>Back to Home</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};