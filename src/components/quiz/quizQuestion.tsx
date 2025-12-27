import { Button } from "../ui/button";
import QuizOption from "./quizOption";
import { BookmarkMinus } from "lucide-react";

export default function QuizQuestion() {
    return (
        <>
            <div className="shadow-sm border border-gray-200 rounded-xl p-6 bg-white">
                <div className="flex justify-between">
                    <p className="text-gray-500 font-sans">Question 1 of 4</p>
                    <Button variant="outline" className="cursor-pointer">
                        <BookmarkMinus className="size-4" />Mark for Review
                    </Button>
                </div>
                <p className="mt-2 mb-8 font-semibold text-xl">What is the capital of France?</p>
                <div className="grid grid-cols-1 gap-y-4">
                    <QuizOption key={1} />
                    <QuizOption key={2} />
                    <QuizOption key={3} />
                    <QuizOption key={4} />
                </div>
            </div>
        </>
    );
};