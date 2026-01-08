"use client"

import { useEffect, useRef, useState } from "react";
import QuizMode, { userAnswersType } from "@/components/quiz/quizMode";
import QuizResult from "@/components/quiz/quizResult";
import StartQuizCard from "@/components/quiz/startQuizCard";
import QuizResultQuestionCard from "@/components/quiz/quizResultQuestionCard";
import { seedData } from "@/utils/seed";
import { Globe } from "lucide-react";

export default function MockTest() {
    const [startQuiz, setStartQuiz] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const allQuestions = useRef(seedData.mockTest.questions);
    const [isHindiSelected, setIsHindiSelected] = useState(false);
    const [questionLanguage, setQuestionLanguage] = useState("EN");
    const [userAnswers, setUserAnswers] = useState<userAnswersType[]>(allQuestions.current.map((question, idx) => {
        return {
            questionId: question.id,
            questionNo: (idx + 1),
            isMarkedForReview: false,
            selectedAnswer: undefined,
        };
    }));

    const totalQuestion = allQuestions.current.length;

    useEffect(() => {
        if (questionLanguage === "HI") {
            setIsHindiSelected(true);
        } else {
            setIsHindiSelected(false);
        }
    }, [questionLanguage]);

    if (!startQuiz) {
        return (
            <>
                <div className="grow flex justify-center items-center">
                    <StartQuizCard
                        quizTimeInMinutes={seedData.mockTest.timeLimitInMinutes}
                        totalQuestions={allQuestions.current.length}
                        setStartQuiz={setStartQuiz}
                    />
                </div>
            </>
        );
    }

    if (isSubmitted) {
        const checkedUserAnswer = userAnswers.filter((userAnswer) => {
            const foundQuestion = allQuestions.current.find((question) => userAnswer.questionId === question.id);
            if (foundQuestion) return userAnswer.selectedAnswer === foundQuestion.correctOption;
        });

        const handleRetakeTest = () => {
            setStartQuiz(false);
            setIsSubmitted(false);
            setUserAnswers(allQuestions.current.map((question, idx) => {
                return {
                    questionId: question.id,
                    questionNo: (idx + 1),
                    isMarkedForReview: false,
                    selectedAnswer: undefined,
                };
            }));
        };

        return (
            <>
                <div className="grow p-16 px-44 flex flex-col gap-y-8">
                    <QuizResult
                        handleRetakeTest={handleRetakeTest}
                        totalQuestions={totalQuestion}
                        correctAnswers={checkedUserAnswer.length}
                    />
                    <div className="shadow-lg border border-gray-200 rounded-xl p-6 bg-white hover:shadow-xl transition duration-300 ease-in-out">
                        <div className="flex justify-between items-center mb-5">
                            <div>
                                <p className="font-sans font-semibold">Detailed Review</p>
                                <p className="font-sans text-gray-500 text-sm mt-0.5">See your answers for each question</p>
                            </div>
                            {/* Question Language */}
                            <div className="flex items-center text-sm">
                                <label htmlFor="questionLanguage"><Globe className="size-4 mr-1" /></label>
                                <select
                                    id="questionLanguage"
                                    name="questionLanguage"
                                    onChange={(evt) => {
                                        setQuestionLanguage(evt.target.value);
                                    }}
                                    className="cursor-pointer"
                                >
                                    <option value="EN">English</option>
                                    <option value="HI">Hindi</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-y-6">
                            {allQuestions.current.map((question) => {
                                const userAnswer = userAnswers.find((userAnswer) => userAnswer.questionId === question.id);
                                return <QuizResultQuestionCard
                                    key={question.id}
                                    questionNo={userAnswer?.questionNo}
                                    isHindiSelected={isHindiSelected}
                                    // Answer
                                    userAnswer={userAnswer?.selectedAnswer}
                                    correctAnswer={question.correctOption as "A" | "B" | "C" | "D"}
                                    // Question
                                    questionEn={question.questionEn}
                                    questionHi={question.questionHi}
                                    // Option A
                                    optionAEn={question.optionAEn}
                                    optionAHi={question.optionAHi}
                                    // Option B
                                    optionBEn={question.optionBEn}
                                    optionBHi={question.optionBHi}
                                    // Option C
                                    optionCEn={question.optionCEn}
                                    optionCHi={question.optionCHi}
                                    // Option D
                                    optionDEn={question.optionDEn}
                                    optionDHi={question.optionDHi}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <QuizMode
                quizTimeInMinutes={seedData.mockTest.timeLimitInMinutes}
                setIsSubmitted={setIsSubmitted}
                userAnswers={userAnswers}
                setUserAnswers={setUserAnswers}
                allQuestions={allQuestions}
            />
        </>
    );
};