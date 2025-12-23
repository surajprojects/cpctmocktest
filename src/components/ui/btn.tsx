import clsx from "clsx";
import { Spinner } from "./spinner";

export type BtnType = "button" | "reset" | "submit";

export default function Btn({
    btnType = "button",
    isLoading = false,
    btnDisabled = false,
    className = "bg-blue-600/90 hover:bg-blue-600/85 text-white disabled:text-gray-500 disabled:border-2 disabled:border-gray-300 disabled:bg-gray-50/20",
    spinnerClassName = "size-5",
    handleClick,
    children = "Click Me",
}: {
    btnType?: BtnType,
    isLoading?: boolean,
    btnDisabled?: boolean,
    className?: string,
    spinnerClassName?: string,
    handleClick?: (() => void) | (() => Promise<void>),
    children?: React.ReactNode,
}) {
    return (
        <>
            <button
                type={btnType}
                disabled={isLoading ? true : btnDisabled}
                onClick={handleClick}
                className={clsx("font-sans w-full text-sm font-semibold py-2 rounded-lg hover:cursor-pointer  duration-300 ease-out outline-none disabled:cursor-not-allowed", className)}>
                {isLoading ? <div className="flex justify-center items-center w-full"><Spinner className={spinnerClassName} /></div> : children}
            </button>
        </>
    );
};