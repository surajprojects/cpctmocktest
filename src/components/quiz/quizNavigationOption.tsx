export default function QuizNavigationOption({
    selected = false,
    questionNumber = 1,
}: {
    selected?: boolean,
    questionNumber?: number,
}) {
    return (
        <>
            {selected ?
                <div className="border-x-2 border-blue-500 flex justify-center items-center rounded-md px-0.5">
                    <div className="size-10 rounded-lg bg-gray-100 border-2 border-gray-300 flex justify-center items-center font-semibold font-sans text-sm transition duration-300 ease-in-out hover:border-blue-500 hover:text-blue-700 cursor-pointer">
                        {questionNumber}
                    </div>
                </div>
                :
                <div className="size-10 rounded-lg bg-gray-100 border-2 border-gray-300 flex justify-center items-center font-semibold font-sans text-sm transition duration-300 ease-in-out hover:border-blue-500 hover:text-blue-700 cursor-pointer">
                    {questionNumber}
                </div>
            }
        </>
    );
};