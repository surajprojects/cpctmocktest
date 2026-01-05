import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export default function QuizCard({
    id = "1",
    title = "General Knowledge",
    description = "Test your general knowledge across various topics including geography...",
    totalQuestion = 75,
    timeLimitInMinutes = 120,
    examDate = "21 Nov. 2025",
}: {
    id?: string,
    title?: string,
    description?: string,
    totalQuestion?: number,
    timeLimitInMinutes?: number,
    examDate?: string,
}) {
    return (
        <>
            <div className="shadow-sm border border-gray-200 rounded-xl p-5 sm:p-6 bg-white hover:shadow-lg transition duration-300 ease-in-out group">
                {/* Title */}
                <p className="text-lg sm:text-xl font-semibold font-sans group-hover:text-blue-600/90 transition duration-300 ease-in-out">{title}</p>
                {/* Description */}
                <p className="text-gray-500 font-sans text-xs sm:text-sm my-1 sm:my-2">{description}</p>
                <div className="flex gap-x-3 sm:gap-x-4 my-4 sm:my-6">
                    {/* Total Question Card */}
                    <div className="bg-blue-50 rounded-lg flex flex-col justify-center items-center py-2.5 sm:py-3 w-full">
                        <p className="font-sans text-blue-600 font-bold text-xl sm:text-2xl">{totalQuestion}</p>
                        <p className="text-xs sm:text-sm font-sans text-blue-600/85 font-medium">Questions</p>
                    </div>
                    {/* Total Minutes Card */}
                    <div className="bg-yellow-100/85 rounded-lg flex flex-col justify-center items-center py-2.5 sm:py-3 w-full">
                        <p className="font-sans text-yellow-600/75 font-bold text-xl sm:text-2xl flex items-center"><Clock className="size-3.5 sm:size-4 mr-1 sm:mr-1.5" />{timeLimitInMinutes}</p>
                        <p className="text-xs sm:text-sm font-sans text-yellow-600/75 font-medium">Minutes</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-1.5 sm:gap-y-2 mb-3.5 sm:mb-5">
                    {/* Total Questions */}
                    <p className="flex items-center justify-between font-sans text-gray-500 text-xs sm:text-sm">
                        <span>Total Questions:</span>
                        <span>{totalQuestion}</span>
                    </p>
                    {/* Time Limit */}
                    <p className="flex items-center justify-between font-sans text-gray-500 text-xs sm:text-sm">
                        <span>Time Limit:</span>
                        <span>{timeLimitInMinutes} minutes</span>
                    </p>
                    {/* Exam Date */}
                    <p className="flex items-center justify-between font-sans text-gray-500 text-xs sm:text-sm">
                        <span>Exam Date:</span>
                        <span>{examDate}</span>
                    </p>
                </div>
                {/* Start Button */}
                <Link href={`/mock/${id}`}>
                    <div className="flex justify-center items-center w-full font-sans text-sm font-medium py-2 rounded-lg hover:cursor-pointer duration-300 ease-out outline-none bg-blue-600/90 hover:bg-blue-600/85 text-white">
                        <p className="text-xs sm:text-sm">Start Test</p>
                        <ArrowRight className="size-4 ml-1 sm:ml-2" />
                    </div>
                </Link>
            </div>
        </>
    );
};