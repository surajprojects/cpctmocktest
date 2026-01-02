import QuizResult from "@/components/quiz/quizResult";
import QuizResultQuestionCard from "@/components/quiz/quizResultQuestionCard";

export default function ResultsPage() {
    return (
        <>
            <div className="p-10 flex flex-col gap-y-8">
                <QuizResult />
                <div className="shadow-lg border border-gray-200 rounded-xl p-6 bg-white hover:shadow-xl transition duration-300 ease-in-out">
                    <p className="font-sans font-semibold">Detailed Review</p>
                    <p className="font-sans text-gray-500 text-sm mt-0.5">See your answers for each question</p>
                    <div className="grid grid-cols-1 gap-y-6">
                        <QuizResultQuestionCard />
                        <QuizResultQuestionCard />
                        <QuizResultQuestionCard />
                        <QuizResultQuestionCard />
                    </div>
                </div>
            </div>
        </>
    );
};