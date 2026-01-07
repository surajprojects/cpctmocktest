import Btn from "../ui/btn";
import { Button } from "../ui/button";
import TimerDisplay from "../ui/timerDisplay";
import { CircleCheckBig, Globe, LogOut, User } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

export default function QuizHeader({
    quizTimeInMinutes = 120,
    setIsSubmitted,
    setIsHindiSelected,
}: {
    quizTimeInMinutes?: number,
    setIsSubmitted: Dispatch<SetStateAction<boolean>>,
    setIsHindiSelected: Dispatch<SetStateAction<boolean>>,
}) {
    const [hasTimeUp, setHasTimeUp] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [questionLanguage, setQuestionLanguage] = useState("EN");
    const [timeLeftInSeconds, setTimeLeftInSeconds] = useState((quizTimeInMinutes * 60));

    const runTimer = () => {
        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            setTimeLeftInSeconds((prev) => {
                if (prev <= 1) {
                    clearInterval(intervalRef.current!);
                    intervalRef.current = null;
                    setHasTimeUp(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const stopTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const resetTimer = () => {
        stopTimer();
        setHasTimeUp(false);
        setTimeLeftInSeconds(10);
    };

    useEffect(() => {
        runTimer();
        return stopTimer;
    }, []);

    useEffect(() => {
        if (hasTimeUp) {
            setIsSubmitted(true);
        }
    }, [hasTimeUp])

    useEffect(() => {
        if (questionLanguage === "HI") {
            setIsHindiSelected(true);
        } else {
            setIsHindiSelected(false);
        }
    }, [questionLanguage])

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
                        <p className="text-gray-600 text-sm font-sans">John Doe</p>
                    </div>
                </div>

                <div className="flex items-center">
                    {/* Question Language */}
                    <div className="flex items-center text-sm mx-3">
                        <label htmlFor="questionLanguage"><Globe className="size-4 mr-1" /></label>
                        <select
                            id="questionLanguage"
                            name="questionLanguage"
                            value={questionLanguage}
                            onChange={(evt) => {
                                setQuestionLanguage(evt.target.value);
                            }}
                            className="cursor-pointer"
                        >
                            <option value="EN">English</option>
                            <option value="HI">Hindi</option>
                        </select>
                    </div>
                    {/* Time Left */}
                    <TimerDisplay timeLeft={timeLeftInSeconds} />
                    {/* Submit Button */}
                    <div className="w-24 mr-3">
                        <Btn
                            handleClick={() => setIsSubmitted(true)}
                            className="bg-green-100 hover:bg-green-200/75 text-green-600"
                        >
                            <div className="flex justify-center items-center w-full">
                                <CircleCheckBig className="size-4 mr-0.5 md:mr-2" />
                                <p className="text-xs md:text-sm">Submit</p>
                            </div>
                        </Btn>
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
            </div >
        </>
    );
};