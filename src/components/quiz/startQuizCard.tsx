import Btn from "../ui/btn";
import { Play } from "lucide-react";

export default function StartQuizCard() {
    return (
        <>
            <div className="bg-white border border-gray-200 rounded-xl p-5 max-w-lg shadow-xl">
                <div className="flex flex-col items-center justify-center">
                    <h5 className="font-bold text-3xl">Ready to Start?</h5>
                    <p className="text-base text-gray-500 mt-2">You have 30 minutes to complete 4 questions</p>
                </div>
                <div className="bg-gray-100 p-4 py-2 rounded-lg my-5">
                    <p className="font-semibold mb-2">Instructions:</p>
                    <ul className="list-disc text-sm text-gray-500 grid grid-cols-1 gap-y-1.5 ml-4">
                        <li>Select one answer for each question</li>
                        <li>You can mark questions for review</li>
                        <li>Navigate between questions using the sidebar or arrows</li>
                        <li>Submit before time runs out</li>
                    </ul>
                </div>
                <Btn>
                    <div className="flex justify-center items-center w-full">
                        <Play className="size-4 mx-2" />
                        <p>Start Quiz</p>
                    </div>
                </Btn>
            </div>
        </>
    );
};