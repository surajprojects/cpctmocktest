import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function QuestionCard() {
    return (
        <>
            <div className="p-5 rounded-lg border border-gray-300 bg-white">
                <div className="flex justify-between">
                    <p className="font-sans font-medium text-base">What is the capital of France?</p>
                    <Button variant="outline" className="border-none cursor-pointer rounded-lg">
                        <Trash2 className="size-4 text-red-600" />
                    </Button>
                </div>
                <div className="my-2">
                    <span className="text-blue-600 font-sans text-xs bg-blue-50 rounded-sm px-3 py-1">Science</span>
                </div>
                <div className="mt-4 text-gray-500 flex flex-col gap-y-2.5 text-sm font-sans">
                    <p className="rounded-sm px-2 py-1">A. London</p>
                    <p className="rounded-sm px-2 py-1">B. Berlin</p>
                    <p className="text-green-600 bg-green-100/75 rounded-sm px-2 py-1">C. Paris</p>
                    <p className="rounded-sm px-2 py-1">D. Madrid</p>
                </div>
            </div>
        </>
    );
};