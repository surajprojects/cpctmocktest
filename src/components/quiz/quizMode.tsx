import QuizHeader from "./quizHeader";
import QuizQuestion from "./quizQuestion";
import QuizNavigation from "./quizNavigation";
import QuizSummaryNavigation from "./quizSummaryNavigation";
import { Dispatch, RefObject, SetStateAction, useEffect, useState } from "react";

export interface userAnswersType {
    questionId: string,
    questionNo: number,
    isMarkedForReview: boolean,
    selectedAnswer: "A" | "B" | "C" | "D" | undefined,
};

export default function QuizMode({
    quizTimeInMinutes,
    setIsSubmitted,
    userAnswers,
    setUserAnswers,
    allQuestions,
}: {
    quizTimeInMinutes: number,
    setIsSubmitted: Dispatch<SetStateAction<boolean>>,
    userAnswers: userAnswersType[],
    setUserAnswers: Dispatch<SetStateAction<userAnswersType[]>>,
    allQuestions: RefObject<{
        id: string;
        questionEn: string;
        questionHi: string;
        optionAEn: string;
        optionAHi: string;
        optionBEn: string;
        optionBHi: string;
        optionCEn: string;
        optionCHi: string;
        optionDEn: string;
        optionDHi: string;
        correctOption: string;
        marks: number;
    }[]>
}) {
    const [isHindiSelected, setIsHindiSelected] = useState(false);
    const [currentQuestionNo, setCurrentQuestionNo] = useState<number>(1);

    // Tab or Window Close or Page Refresh Dialog
    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            e.preventDefault()
            e.returnValue = "" // required for Chrome
        }

        window.addEventListener("beforeunload", handleBeforeUnload)

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload)
        }
    }, []);

    return (
        <>
            <QuizHeader
                quizTimeInMinutes={quizTimeInMinutes}
                setIsSubmitted={setIsSubmitted}
                setIsHindiSelected={setIsHindiSelected}
            />
            <div className="grow p-7 lg:p-9 flex flex-col md:flex-row gap-8">
                <div className="flex flex-col gap-6 md:gap-8 grow-12">
                    <QuizQuestion
                        questionNo={currentQuestionNo}
                        totalQuestions={allQuestions.current.length}
                        isHindiSelected={isHindiSelected}
                        // User Answer
                        userAnswers={userAnswers}
                        setUserAnswers={setUserAnswers}
                        // Question
                        questionEn={allQuestions.current[currentQuestionNo - 1].questionEn}
                        questionHi={allQuestions.current[currentQuestionNo - 1].questionHi}
                        // Option A
                        optionAEn={allQuestions.current[currentQuestionNo - 1].optionAEn}
                        optionAHi={allQuestions.current[currentQuestionNo - 1].optionAHi}
                        // Option B
                        optionBEn={allQuestions.current[currentQuestionNo - 1].optionBEn}
                        optionBHi={allQuestions.current[currentQuestionNo - 1].optionBHi}
                        // Option C
                        optionCEn={allQuestions.current[currentQuestionNo - 1].optionCEn}
                        optionCHi={allQuestions.current[currentQuestionNo - 1].optionCHi}
                        // Option D
                        optionDEn={allQuestions.current[currentQuestionNo - 1].optionDEn}
                        optionDHi={allQuestions.current[currentQuestionNo - 1].optionDHi}
                    />
                    <QuizNavigation
                        currentQuestionNo={currentQuestionNo}
                        setCurrentQuestionNo={setCurrentQuestionNo}
                        totalQuestions={allQuestions.current.length}
                    />
                </div>
                <QuizSummaryNavigation
                    currentQuestionNo={currentQuestionNo}
                    setCurrentQuestionNo={setCurrentQuestionNo}
                    totalQuestions={allQuestions.current.length}
                    userAnswers={userAnswers}
                />
            </div>
        </>
    );
};