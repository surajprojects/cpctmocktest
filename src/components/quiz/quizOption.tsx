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
            <div className={clsx("group border-2 p-3 md:p-4 rounded-lg shadow-xs flex items-center transition duration-300 ease-in-out", isSelected ? "border-blue-600 bg-blue-50/50" : "border-gray-200 hover:border-blue-600 bg-white hover:bg-blue-50/50 cursor-pointer")}>
                {/* Label */}
                <div className={clsx("border-2 size-7 md:size-8 text-xs md:text-sm font-bold md:font-semibold flex justify-center items-center rounded-full", isSelected ? "border-blue-600 bg-blue-600 text-white " : "border-gray-500 group-hover:border-blue-600 group-hover:text-blue-800")}>{label}</div>
                {/* Text */}
                <p className="mx-2 md:mx-3 text-gray-800 font-medium text-sm md:text-base">{text}</p>
            </div >
        </>
    );
};