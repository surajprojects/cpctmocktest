import Btn from "../ui/btn";
import { ArrowRight, Clock } from "lucide-react";

export default function QuizCard({
    title = "General Knowledge",
    description = "Test your general knowledge across various topics including geography...",
    totalQuestion = 75,
    timeLimitInMinutes = 120,
    examDate = "21 Nov. 2025",
}: {
    title?: string,
    description?: string,
    totalQuestion?: number,
    timeLimitInMinutes?: number,
    examDate?: string,
}) {
    return (
        <>
            <div className="shadow-sm border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition duration-300 ease-in-out">
                {/* Title */}
                <p className="text-xl font-semibold font-sans">{title}</p>
                {/* Description */}
                <p className="text-gray-500 font-sans text-sm my-2">{description}</p>
                <div className="grid grid-cols-3 gap-x-4 my-6">
                    {/* Total Question Card */}
                    <div className="bg-blue-50 rounded-lg flex flex-col justify-center items-center py-3">
                        <p className="font-sans text-blue-600 font-bold text-2xl">{totalQuestion}</p>
                        <p className="text-sm font-sans text-gray-500">Questions</p>
                    </div>
                    {/* Total Minutes Card */}
                    <div className="bg-yellow-100/85 rounded-lg flex flex-col justify-center items-center py-3">
                        <p className="font-sans text-yellow-600/80 font-bold text-2xl flex items-center"><Clock className="size-4 mr-1.5" />{timeLimitInMinutes}</p>
                        <p className="text-sm font-sans text-yellow-500">Minutes</p>
                    </div>
                    {/* Minutes per Question Card */}
                    <div className="bg-blue-50 rounded-lg flex flex-col justify-center items-center py-3">
                        <p className="font-sans text-blue-600 font-bold text-2xl">{timeLimitInMinutes / totalQuestion}</p>
                        <p className="text-sm font-sans text-gray-500">Min/Question</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-2 mb-5">
                    {/* Total Questions */}
                    <p className="flex items-center justify-between font-sans text-gray-500 text-sm">
                        <span>Total Questions:</span>
                        <span>{totalQuestion}</span>
                    </p>
                    {/* Time Limit */}
                    <p className="flex items-center justify-between font-sans text-gray-500 text-sm">
                        <span>Time Limit:</span>
                        <span>{timeLimitInMinutes} minutes</span>
                    </p>
                    {/* Exam Date */}
                    <p className="flex items-center justify-between font-sans text-gray-500 text-sm">
                        <span>Exam Date:</span>
                        <span>{examDate}</span>
                    </p>
                </div>
                {/* Start Button */}
                <Btn>
                    <div className="flex justify-center items-center w-full">
                        <p>Start Test</p>
                        <ArrowRight className="size-4 ml-2" />
                    </div>
                </Btn>
            </div>
        </>
    );
};