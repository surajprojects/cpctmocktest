export default function QuizSummary() {
    return (
        <>
            <div className="shadow-sm border border-gray-200 rounded-xl p-6 bg-white h-96 w-sm mx-10">
                <div className="grid grid-cols-2 gap-x-3">
                    <div className="bg-green-100 text-green-600/90 rounded-lg p-4">
                        <p className="text-3xl font-bold font-sans">0</p>
                        <p className="text-sm font-sans">Answered</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                        <p className="text-3xl font-bold font-sans">4</p>
                        <p className="text-sm font-sans">Not Answered</p>
                    </div>
                </div>
                <div className="border-y border-gray-200 py-3 my-4">
                    <p className="font-semibold">Question Navigation</p>
                    <div className="mt-3 mb-1 flex flex-wrap gap-2">
                        <div className="border-x-2 border-blue-500 flex justify-center items-center rounded-md px-0.5">
                            <div className="size-10 rounded-lg bg-gray-100 border-2 border-gray-300 flex justify-center items-center font-semibold font-sans text-sm transition duration-300 ease-in-out hover:border-blue-500 hover:text-blue-700">
                                1
                            </div>
                        </div>
                        <div className="border-x-2 border-blue-500 flex justify-center items-center rounded-md px-0.5">
                            <div className="size-10 rounded-lg bg-gray-100 border-2 border-gray-300 flex justify-center items-center font-semibold font-sans text-sm">
                                2
                            </div>
                        </div>
                        <div className="size-10 rounded-lg bg-gray-100 border-2 border-gray-300 flex justify-center items-center font-semibold font-sans text-sm">
                            3
                        </div>
                        <div className="size-10 rounded-lg bg-gray-100 border-2 border-gray-300 flex justify-center items-center font-semibold font-sans text-sm">
                            4
                        </div>
                        <div className="size-10 rounded-lg bg-gray-100 border-2 border-gray-300 flex justify-center items-center font-semibold font-sans text-sm">
                            5
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-y-3">
                    <div className="flex items-center">
                        <div className="size-6 rounded-sm bg-green-100 border-2 border-green-500"></div>
                        <p className="mx-2 text-sm font-sans">Answered</p>
                    </div>
                    <div className="flex items-center">
                        <div className="size-6 rounded-sm bg-amber-100 border-2 border-amber-500"></div>
                        <p className="mx-2 text-sm font-sans">Marked for review</p>
                    </div>
                    <div className="flex items-center">
                        <div className="size-6 rounded-sm bg-gray-100 border-2 border-gray-300"></div>
                        <p className="mx-2 text-sm font-sans">Not Answered</p>
                    </div>
                </div>
            </div>
        </>
    );
};