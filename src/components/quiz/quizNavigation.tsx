import Btn from "../ui/btn";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function QuizNavigation() {
    return (
        <>
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