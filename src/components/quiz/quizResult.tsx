import Btn from "../ui/btn";
import { Home, RotateCcw, TriangleAlert } from "lucide-react";

export default function QuizResult() {
    return (
        <>
            <div className="shadow-lg border border-gray-200 rounded-xl p-6 bg-white hover:shadow-xl transition duration-300 ease-in-out">
                <div className="flex flex-col items-center mb-16">
                    <div className="bg-yellow-100/70 p-6 rounded-full mb-5">
                        <TriangleAlert className="size-16 text-yellow-500" />
                    </div>
                    <p className="font-sans text-3xl font-semibold">Quiz Completed</p>
                    <p className="font-sans text-gray-500 mt-2">Keep practicing to improve your score.</p>
                </div>
                <div className="grid grid-cols-3 gap-6 my-10">
                    <div className="bg-blue-50 rounded-lg flex flex-col justify-center items-center py-6">
                        <p className="font-sans text-blue-600 font-bold text-4xl">0/4</p>
                        <p className="text-sm font-sans text-gray-500 mt-2">Correct Answers</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg flex flex-col justify-center items-center py-6">
                        <p className="font-sans text-black font-bold text-4xl">0%</p>
                        <p className="text-sm font-sans text-gray-500 mt-2">Score Percentage</p>
                    </div>
                    <div className="bg-yellow-100/70 rounded-lg flex flex-col justify-center items-center py-6">
                        <p className="font-sans text-yellow-600/75 font-bold text-2xl">NEEDS IMPROVEMENT</p>
                        <p className="text-sm font-sans text-yellow-600/75 mt-2">Status</p>
                    </div>
                </div>
                <div className="flex gap-x-4">
                    <Btn>
                        <div className="flex justify-center items-center w-full">
                            <RotateCcw className="size-4 mr-2" />
                            <p>Retake Test</p>
                        </div>
                    </Btn>
                    <Btn
                        className="bg-white hover:bg-gray-100 border-2 border-gray-200/70 text-black disabled:bg-gray-200/70"
                    >
                        <div className="flex justify-center items-center w-full">
                            <Home className="size-4 mr-2" />
                            <p>Back to Home</p>
                        </div>
                    </Btn>
                </div>
            </div>
        </>
    );
};