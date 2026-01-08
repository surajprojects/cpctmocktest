import { userAnswersType } from "./quizMode";
import { Dispatch, SetStateAction } from "react";
import QuizAllQuestionNumbers from "./quizAllQuestionNumbers";

export default function QuizSummaryNavigation({
    totalQuestions = 4,
    currentQuestionNo = 1,
    setCurrentQuestionNo,
    userAnswers,
}: {
    totalQuestions?: number,
    currentQuestionNo?: number,
    userAnswers: userAnswersType[],
    setCurrentQuestionNo: Dispatch<SetStateAction<number>>,
}) {
    const answeredQuestions = userAnswers.filter((userAnswer) => userAnswer.selectedAnswer !== undefined).length;
    const notAnsweredQuestions = userAnswers.filter((userAnswer) => userAnswer.selectedAnswer === undefined).length;
    return (
        <>
            <div className="shadow-sm border border-gray-200 rounded-xl p-5 md:p-6 bg-white grow h-fit max-w-sm">
                {/* Questions Summary */}
                <div className="grid grid-cols-2 gap-x-3">
                    <div className="bg-green-100 text-green-600/90 rounded-lg p-3.5 md:p-4">
                        <p className="text-2xl md:text-3xl font-bold font-sans">{answeredQuestions}</p>
                        <p className="text-xs md:text-sm font-sans">Answered</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3.5 md:p-4">
                        <p className="text-2xl md:text-3xl font-bold font-sans">{notAnsweredQuestions}</p>
                        <p className="text-xs md:text-sm font-sans">Not Answered</p>
                    </div>
                </div>
                {/* Questions Navigation */}
                <div className="border-y border-gray-200 py-2.5 md:py-3 my-3.5 md:my-4">
                    <p className="text-sm md:text-base font-semibold">Question Navigation</p>
                    <div className="mt-3 mb-1 flex flex-wrap gap-1 gap-y-2.5">
                        <QuizAllQuestionNumbers
                            totalQuestions={totalQuestions}
                            currentQuestionNo={currentQuestionNo}
                            userAnswers={userAnswers}
                            setCurrentQuestionNo={setCurrentQuestionNo}
                        />
                    </div>
                </div>
                {/* Legend's */}
                <div className="grid grid-cols-1 gap-y-2.5 md:gap-y-3">
                    <div className="flex items-center">
                        <div className="size-5 md:size-6 rounded-sm bg-green-100 border-2 border-green-500"></div>
                        <p className="mx-2 text-xs md:text-sm font-sans">Answered</p>
                    </div>
                    <div className="flex items-center">
                        <div className="size-5 md:size-6 rounded-sm bg-amber-100 border-2 border-amber-500"></div>
                        <p className="mx-2 text-xs md:text-sm font-sans">Marked for review</p>
                    </div>
                    <div className="flex items-center">
                        <div className="size-5 md:size-6 rounded-sm bg-gray-100 border-2 border-gray-300"></div>
                        <p className="mx-2 text-xs md:text-sm font-sans">Not Answered</p>
                    </div>
                </div>
            </div>
        </>
    );
};