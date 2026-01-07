import { Clock } from "lucide-react";

export default function TimerDisplay({ timeLeft = 10 }) {
    const hrs = Math.floor(timeLeft / 3600);
    const mins = Math.floor((timeLeft % 3600) / 60);
    const secs = timeLeft % 60;
    return (
        <>
            <div className="flex items-center mx-3 bg-gray-200/80 p-1.5 px-3 rounded-lg">
                <Clock className="size-4 mr-1" />
                <p className="font-bold text-md font-sans"><span>{hrs.toString().padStart(2, "0")}</span>:<span>{mins.toString().padStart(2, "0")}</span>:<span>{secs.toString().padStart(2, "0")}</span></p>
            </div>
        </>
    );
};