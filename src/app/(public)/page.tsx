import StartQuizCard from "@/components/quiz/startQuizCard";
import { Award, BookOpen, ClipboardList } from "lucide-react";

export default function Home() {
    return (
        <>
            <div className="grow flex items-center px-28">
                <div>
                    <h1 className="font-bold text-5xl text-blue-600">Tiger Quiz</h1>
                    <p className="text-xl text-gray-600 mt-4">Test your knowledge, track your progress and excel in your learning journey.</p>
                    <div className="grid grid-cols-1 gap-y-3 mt-8">
                        <div className="flex items-center">
                            <ClipboardList className="size-9 text-blue-600 bg-blue-100 p-2 rounded-lg" />
                            <div className="ml-3">
                                <p className="font-medium">Timed Quizzes</p>
                                <p className="text-sm text-gray-500">Take challenging quizzes with real-time tracking.</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <BookOpen className="size-9 text-indigo-600 bg-indigo-100 p-2 rounded-lg" />
                            <div className="ml-3">
                                <p className="font-medium">Question Management</p>
                                <p className="text-sm text-gray-500">Creator can add questions via UI or JSON upload.</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Award className="size-9 text-violet-600 bg-violet-100 p-2 rounded-lg" />
                            <div className="ml-3">
                                <p className="font-medium">Instant Results</p>
                                <p className="text-sm text-gray-500">Get detailed performance analytics after submission.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};