import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

export default function QuizNavigationOption({
    selected = false,
    questionNumber = 1,
    setCurrentQuestionNo,
    answerStatus = "NOTANSWERED",
}: {
    selected?: boolean,
    questionNumber?: number,
    answerStatus?: "ANSWERED" | "NOTANSWERED" | "MARKEDFORREVIEW",
    setCurrentQuestionNo: Dispatch<SetStateAction<number>>,
}) {
    return (
        <>
            {selected ?
                <div className="w-12 overflow-y-auto flex items-center justify-center">
                    <div
                        className={clsx("ring-2 ring-blue-500 ring-offset-2 size-10 rounded-lg border-2 flex justify-center items-center font-semibold font-sans text-sm transition duration-300 ease-in-out cursor-pointer", answerStatus === "ANSWERED" ? "bg-green-100 border-green-500 text-green-600 hover:bg-green-200/75" : answerStatus === "MARKEDFORREVIEW" ? "bg-amber-100 border-amber-500 text-amber-600 hover:bg-amber-200/70" : "bg-gray-100 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600")}
                    >
                        {questionNumber}
                    </div>
                </div>
                :
                <div className="w-12 overflow-y-auto flex items-center justify-center">
                    <div
                        onClick={() => setCurrentQuestionNo(questionNumber)}
                        className={clsx("size-10 rounded-lg border-2 flex justify-center items-center font-semibold font-sans text-sm transition duration-300 ease-in-out cursor-pointer", answerStatus === "ANSWERED" ? "bg-green-100 border-green-500 text-green-600 hover:bg-green-200/75" : answerStatus === "MARKEDFORREVIEW" ? "bg-amber-100 border-amber-500 text-amber-600 hover:bg-amber-200/70" : "bg-gray-100 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600")}
                    >
                        {questionNumber}
                    </div>
                </div>
            }
        </>
    );
};