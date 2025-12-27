import clsx from "clsx"

export default function QuizOption({
    text = "London",
    label = "A",
    isSelected = false,
}: {
    text?: string,
    isSelected?: boolean,
    label?: "A" | "B" | "C" | "D",
}) {
    return (
        <>
            <div className={clsx("group border-2 p-4 rounded-lg shadow-xs flex items-center transition duration-300 ease-in-out", isSelected ? "border-blue-600 bg-blue-50/50" : "border-gray-200 hover:border-blue-600 bg-white hover:bg-blue-50/50 cursor-pointer")}>
                <div className={clsx("border-2 size-8 text-sm font-semibold flex justify-center items-center rounded-full", isSelected ? "border-blue-600 bg-blue-600 text-white " : "border-gray-500 group-hover:border-blue-600 group-hover:text-blue-800")}>{label}</div>
                <p className="mx-3 text-gray-800 font-medium">{text}</p>
            </div >
        </>
    );
};