import { Button } from "../ui/button";
import { Clock, LogOut, User } from "lucide-react";

export default function QuizHeader() {
    return (
        <>
            <div className="flex justify-between items-center bg-white border-b py-4 lg:py-5 px-7 lg:px-8 shadow-xs">
                <div className="flex items-center">
                    {/* Icon */}
                    <User className="size-9 text-white bg-blue-600 p-2 rounded-lg mr-2.5" />
                    <div>
                        {/* Title */}
                        <p className="text-lg font-bold font-sans">Quiz Mode</p>
                        {/* Description */}
                        <p className="text-gray-600 text-sm font-sans">suraj23082002</p>
                    </div>
                </div>
                <div className="flex items-center">
                    {/* Time Left */}
                    <div className="flex items-center mr-4 bg-gray-200/80 p-1.5 px-3 rounded-lg">
                        <Clock className="size-4 mr-1" />
                        <p className="font-bold text-md font-sans"><span>20</span><span className="mx-0.5">:</span><span>28</span></p>
                    </div>
                    {/* Exit Button */}
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