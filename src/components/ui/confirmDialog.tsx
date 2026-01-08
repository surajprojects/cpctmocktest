import Btn from "./btn";
import { X } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

export default function ConfirmDialog({
    showForm,
    setShowForm,
    handleConfirm,
}: {
    showForm: boolean,
    setShowForm: Dispatch<SetStateAction<boolean>>,
    handleConfirm?: () => Promise<void> | void,
}) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(false);

    const handleCloseForm = () => {
        setShowForm(false);
    };

    const handleConfirmFunc = async () => {
        setIsLoading(true);
        setIsBtnDisabled(true);
        handleConfirm && await handleConfirm();
        setIsLoading(false);
        setIsBtnDisabled(false);
        handleCloseForm();
    };
    return (
        <>
            {showForm &&
                <div onClick={handleCloseForm} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div onClick={(evt) => evt.stopPropagation()} className="bg-white p-6 rounded-xl shadow-lg relative">
                        <button
                            type="button"
                            onClick={handleCloseForm}
                            className="absolute top-2 right-2 m-0.5 hover:bg-gray-100 duration-300 ease-out cursor-pointer rounded-xl p-0.5 text-gray-500"
                        >
                            <X className="size-4" />
                        </button>
                        <div className="w-md">
                            <h5 className="text-xl text-center font-medium text-gray-800">Are you sure?</h5>
                            <div className="flex gap-3 mt-6">
                                <Btn
                                    handleClick={handleCloseForm}
                                    className="text-black bg-gray-200/70 hover:bg-gray-200 border border-gray-200/50"
                                >Cancel</Btn>
                                <Btn
                                    isLoading={isLoading}
                                    btnDisabled={isBtnDisabled}
                                    handleClick={handleConfirmFunc}
                                    className="bg-red-500 hover:bg-red-500/90 text-white"
                                    spinnerClassName="fill-red-600"
                                >Confirm</Btn>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};