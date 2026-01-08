import clsx from "clsx";
import { CircleCheck, CircleX } from "lucide-react";

export default function QuizResultOption({
    text = "London",
    label = "A",
    correct = false,
    wrong = false,
}: {
    text?: string,
    correct?: boolean,
    wrong?: boolean,
    label?: "A" | "B" | "C" | "D",
}) {
    return (
        <>
            <div className={clsx("border-2 p-3 rounded-lg shadow-xs flex", correct ? "border-green-600 bg-green-50" : wrong ? "border-red-600 bg-red-50" : "border-gray-200 bg-gray-50/40")}>
                <div className={clsx("border-2 size-6 text-sm font-semibold flex justify-center items-center rounded-full px-1", correct ? "border-green-600 bg-green-600 text-white" : wrong ? "border-red-600 bg-red-600 text-white" : "border-gray-500")}>
                    {label}
                </div>
                <div className="ml-3 w-full">
                    <div className="text-gray-800 font-medium flex justify-between items-center">
                        <p>{text}</p>
                        {(correct || wrong) && correct ? <CircleCheck className="size-5 text-green-600" /> : wrong ? <CircleX className="size-5 text-red-600" /> : ""}
                    </div>
                    {(correct || wrong) && <p className={clsx("text-xs font-sans mt-1", correct ? "text-green-600" : wrong ? "text-red-600" : "")}>{correct ? "Correct" : "Wrong"} Answer</p>}
                </div>
            </div >
        </>
    );
};