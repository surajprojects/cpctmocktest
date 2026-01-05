import Btn from "@/components/ui/btn";
import QuizCard from "@/components/quiz/quizCard";

export default function AdminHome() {
    return (
        <>
            {/* Header */}
            <div className="w-full font-sans fixed top-0 left-0 z-50 bg-white border-b shadow-sm py-4 md:py-6 px-6 md:px-12 flex justify-between items-center">
                <div>
                    {/* Title */}
                    <h1 className="font-bold text-2xl md:text-3xl text-blue-600">CPCT Mock Test Admin</h1>
                    {/* Description */}
                    <p className="text-sm md:text-md mt-1 text-gray-600/80">Select a test</p>
                </div>
                {/* Sign In Button */}
                <div className="hidden sm:block w-24">
                    <Btn>
                        Sign In
                    </Btn>
                </div>
            </div>
            {/* All Quiz Cards Wrapper */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24 md:mt-32 py-6 md:py-8 px-6 md:px-12">
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
            </div>
        </>
    );
};