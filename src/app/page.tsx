import { seedData } from "@/utils/seed";
import { formatDate } from "@/utils/dateAndTime";
import QuizCard from "@/components/quiz/quizCard";

export default function Home() {
    return (
        <>
            {/* Header */}
            <div className="w-full font-sans fixed top-0 left-0 z-50 bg-white border-b shadow-sm py-4 md:py-6 px-6 md:px-12 flex justify-between items-center">
                <div>
                    {/* Title */}
                    <h1 className="font-bold text-2xl md:text-3xl text-blue-600">CPCT Mock Test</h1>
                    {/* Description */}
                    <p className="text-sm md:text-md mt-1 text-gray-600/80">Select a test and begin your practice.</p>
                </div>
                {/* Sign In Button */}
                {/* <div className="hidden sm:block w-24">
                    <Btn>
                        Sign In
                    </Btn>
                </div> */}
            </div>
            {/* All Quiz Cards Wrapper */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mt-24 md:mt-32 py-6 md:py-8 px-6 md:px-12">
                <QuizCard
                    key={1}
                    id={seedData.mockTest.id}
                    title={seedData.mockTest.title}
                    description={seedData.mockTest.description}
                    totalQuestion={seedData.mockTest.totalQuestions}
                    timeLimitInMinutes={seedData.mockTest.timeLimitInMinutes}
                    examDate={formatDate(seedData.mockTest.examDate.split("T")[0])}
                />
                <QuizCard
                    key={2}
                    id={seedData.mockTest.id}
                    title={seedData.mockTest.title}
                    description={seedData.mockTest.description}
                    totalQuestion={seedData.mockTest.totalQuestions}
                    timeLimitInMinutes={seedData.mockTest.timeLimitInMinutes}
                    examDate={formatDate(seedData.mockTest.examDate.split("T")[0])}
                />
                <QuizCard
                    key={3}
                    id={seedData.mockTest.id}
                    title={seedData.mockTest.title}
                    description={seedData.mockTest.description}
                    totalQuestion={seedData.mockTest.totalQuestions}
                    timeLimitInMinutes={seedData.mockTest.timeLimitInMinutes}
                    examDate={formatDate(seedData.mockTest.examDate.split("T")[0])}
                />
                <QuizCard
                    key={4}
                    id={seedData.mockTest.id}
                    title={seedData.mockTest.title}
                    description={seedData.mockTest.description}
                    totalQuestion={seedData.mockTest.totalQuestions}
                    timeLimitInMinutes={seedData.mockTest.timeLimitInMinutes}
                    examDate={formatDate(seedData.mockTest.examDate.split("T")[0])}
                />
                <QuizCard
                    key={5}
                    id={seedData.mockTest.id}
                    title={seedData.mockTest.title}
                    description={seedData.mockTest.description}
                    totalQuestion={seedData.mockTest.totalQuestions}
                    timeLimitInMinutes={seedData.mockTest.timeLimitInMinutes}
                    examDate={formatDate(seedData.mockTest.examDate.split("T")[0])}
                />
                <QuizCard
                    key={6}
                    id={seedData.mockTest.id}
                    title={seedData.mockTest.title}
                    description={seedData.mockTest.description}
                    totalQuestion={seedData.mockTest.totalQuestions}
                    timeLimitInMinutes={seedData.mockTest.timeLimitInMinutes}
                    examDate={formatDate(seedData.mockTest.examDate.split("T")[0])}
                />
            </div>
        </>
    );
};