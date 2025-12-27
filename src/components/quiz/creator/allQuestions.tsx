import QuestionCard from "./questionCard";

export default function AllQuestions() {
    return (
        <>
            <div className="shadow-sm border border-gray-200 rounded-xl p-6 bg-white">
                <p className="font-sans font-semibold">Question Bank &#40;4&#41;</p>
                <p className="font-sans text-gray-500 text-sm mt-0.5">Manage your quiz questions</p>
                <div className="mt-6 grid grid-cols-1 gap-y-5">
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                </div>
            </div>
        </>
    );
};