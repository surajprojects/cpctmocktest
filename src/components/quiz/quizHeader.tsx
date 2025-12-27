import { Clock, LogOut, User } from "lucide-react";
import { Button } from "../ui/button";

export default function QuizHeader() {
    return (
        <>
            <div className="flex justify-between items-center bg-white border-b px-10 py-4 shadow-xs">
                <div className="flex items-center">
                    <User className="size-9 text-white bg-blue-600 p-2 rounded-lg mr-2.5" />
                    <div>
                        <p className="text-lg font-bold font-sans">Quiz Mode</p>
                        <p className="text-gray-600 text-sm font-sans">suraj23082002</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center mr-5 bg-gray-200/80 p-1.5 px-3.5 rounded-lg">
                        <Clock className="size-5 mr-2" />
                        <p className="font-bold text-lg font-sans"><span>20</span><span className="mx-0.5">:</span><span>28</span></p>
                    </div>
                    <Button
                        variant="outline"
                        className="cursor-pointer"
                    >
                        <LogOut className="size-4" />
                        Exit
                    </Button>
                </div>
            </div>
        </>
    );
};