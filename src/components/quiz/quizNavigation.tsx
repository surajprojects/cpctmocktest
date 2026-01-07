import Btn from "../ui/btn";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function QuizNavigation({
    currentQuestionNo = 1,
    setCurrentQuestionNo,
    totalQuestions = 4,
}: {
    currentQuestionNo?: number,
    setCurrentQuestionNo: Dispatch<SetStateAction<number>>,
    totalQuestions?: number,
}) {
    const [btnDisabled, setIsBtnDisabled] = useState({
        prevBtn: currentQuestionNo === 1,
        nextBtn: !(currentQuestionNo < totalQuestions),
    });

    useEffect(() => {
        setIsBtnDisabled((prevData) => {
            return {
                ...prevData,
                prevBtn: currentQuestionNo === 1,
                nextBtn: !(currentQuestionNo < totalQuestions),
            };
        });
    }, [currentQuestionNo]);

    return (
        <>
            <div className="flex justify-between">
                {/* Previous Button */}
                <div className="w-28">
                    <Btn
                        btnDisabled={btnDisabled.prevBtn}
                        handleClick={() => {
                            if (currentQuestionNo > 1) {
                                setIsBtnDisabled((prevData) => {
                                    return {
                                        ...prevData,
                                        prevBtn: (currentQuestionNo - 1) === 1,
                                        nextBtn: false,
                                    };
                                })
                                setCurrentQuestionNo((prevData) => prevData - 1);
                            }
                        }}
                    >
                        <div className="flex justify-center items-center w-full">
                            <ChevronLeft className="size-4 mr-0.5 md:mr-2" />
                            <p className="text-xs md:text-sm">Previous</p>
                        </div>
                    </Btn>
                </div>
                {/* Next Button */}
                <div className="w-20 md:w-24">
                    <Btn
                        btnDisabled={btnDisabled.nextBtn}
                        handleClick={() => {
                            if ((totalQuestions > 1) && (currentQuestionNo < totalQuestions)) {
                                setIsBtnDisabled((prevData) => {
                                    return {
                                        ...prevData,
                                        prevBtn: false,
                                        nextBtn: (currentQuestionNo + 1) === totalQuestions,
                                    };
                                })
                                setCurrentQuestionNo((prevData) => prevData + 1);
                            }
                        }}
                    >
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