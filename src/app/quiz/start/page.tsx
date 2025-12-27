import QuizHeader from "@/components/quiz/quizHeader";
import QuizSummary from "@/components/quiz/quizSummary";
import QuizQuestion from "@/components/quiz/quizQuestion";
import QuizNavigation from "@/components/quiz/quizNavigation";
import AddQuestion from "@/components/quiz/creator/addQuestion";
import BulkQuestions from "@/components/quiz/creator/bulkQuestions";

export default function QuizStart() {
    return (
        <>
            <QuizHeader />
            <div className="m-10 flex w-full">
                <div className="grid grid-cols-1 gap-10">
                    <QuizQuestion />
                    <QuizNavigation />
                    <AddQuestion />
                    <BulkQuestions />
                </div>
                <QuizSummary />
            </div>
        </>
    );
};