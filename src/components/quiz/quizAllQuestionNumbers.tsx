import { userAnswersType } from "./quizMode";
import { Dispatch, SetStateAction } from "react";
import QuizNavigationOption from "./quizNavigationOption";

export default function QuizAllQuestionNumbers({
    totalQuestions = 4,
    setCurrentQuestionNo,
    currentQuestionNo = 1,
    userAnswers,
}: {
    totalQuestions?: number,
    currentQuestionNo?: number,
    userAnswers: userAnswersType[],
    setCurrentQuestionNo: Dispatch<SetStateAction<number>>,
}) {
    let allQuestionNumbers = [];
    for (let i = 1; i < (totalQuestions + 1); i++) {
        let questionAnswered = userAnswers.find((userAnswer) => userAnswer.questionNo === i);
        allQuestionNumbers.push(<QuizNavigationOption
            key={i}
            questionNumber={i}
            selected={currentQuestionNo === i}
            setCurrentQuestionNo={setCurrentQuestionNo}
            answerStatus={questionAnswered ? questionAnswered.isMarkedForReview ? "MARKEDFORREVIEW" : (questionAnswered.selectedAnswer !== undefined ? "ANSWERED" : "NOTANSWERED") : "NOTANSWERED"}
        />)
    }
    return <>
        {allQuestionNumbers}
    </>;
};