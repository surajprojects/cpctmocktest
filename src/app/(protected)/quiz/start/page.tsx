import Btn from "@/components/ui/btn";
import { BookmarkMinus, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuizOption from "@/components/quiz/quizOption";

export default function QuizStart() {
    return (
        <>
            <div className="shadow-sm border border-gray-200 rounded-xl p-6 bg-white m-10">
                <div className="flex justify-between">
                    <p className="text-gray-500">Question 1 of 4</p>
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
            <div className="flex justify-between">
                <div className="w-28">
                    <Btn>
                        <div className="flex justify-center items-center w-full">
                            <ChevronLeft className="size-4 mr-2" />
                            <p>Previous</p>
                        </div>
                    </Btn>
                </div>
                <div className="w-24">
                    <Btn>
                        <div className="flex justify-center items-center w-full">
                            <p>Next</p>
                            <ChevronRight className="size-4 ml-2" />
                        </div>
                    </Btn>
                </div>
            </div>
        </>
    );
};