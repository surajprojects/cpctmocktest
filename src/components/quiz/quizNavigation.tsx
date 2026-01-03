import Btn from "../ui/btn";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function QuizNavigation() {
    return (
        <>
            <div className="flex justify-between">
                {/* Previous Button */}
                <div className="w-28">
                    <Btn>
                        <div className="flex justify-center items-center w-full">
                            <ChevronLeft className="size-4 mr-0.5 md:mr-2" />
                            <p className="text-xs md:text-sm">Previous</p>
                        </div>
                    </Btn>
                </div>
                {/* Next Button */}
                <div className="w-20 md:w-24">
                    <Btn>
                        <div className="flex justify-center items-center w-full">
                            <p className="text-xs md:text-sm">Next</p>
                            <ChevronRight className="size-4 ml-0.5 md:ml-2" />
                        </div>
                    </Btn>
                </div>
            </div>
        </>
    );
};