import { Plus } from "lucide-react";
import Btn from "@/components/ui/btn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function AddQuestion() {
    return (
        <>
            <div className="shadow-sm border border-gray-200 rounded-xl p-6 bg-white">
                <p className="font-sans font-semibold flex items-center"><Plus className="size-5 mr-2" /> Add Question Manually</p>
                <p className="font-sans text-gray-500 text-sm mt-0.5">Create a new quiz question</p>
                <div className="mt-5">
                    <div>
                        <Label htmlFor="question" className="mb-2.5">Question</Label>
                        <Textarea
                            id="question"
                            placeholder="Enter your question..."
                            className="focus-visible:ring-blue-400/80"
                        />
                    </div>
                    <div>
                        <Label className="mt-4">Options</Label>
                        <div className="grid grid-cols-1 gap-y-3 my-2.5">
                            <div className="flex items-center">
                                <Input placeholder="Option A" className="focus-visible:ring-blue-400/80" />
                                <Input type="radio" name="correctOption" className="size-4 ml-2 cursor-pointer" />
                            </div>
                            <div className="flex items-center">
                                <Input placeholder="Option B" className="focus-visible:ring-blue-400/80" />
                                <Input type="radio" name="correctOption" className="size-4 ml-2 cursor-pointer" />
                            </div>
                            <div className="flex items-center">
                                <Input placeholder="Option C" className="focus-visible:ring-blue-400/80" />
                                <Input type="radio" name="correctOption" className="size-4 ml-2 cursor-pointer" />
                            </div>
                            <div className="flex items-center">
                                <Input placeholder="Option D" className="focus-visible:ring-blue-400/80" />
                                <Input type="radio" name="correctOption" className="size-4 ml-2 cursor-pointer" />
                            </div>
                        </div>
                        <p className="text-xs text-gray-500">Select the correct answer</p>
                    </div>
                    <div className="my-4">
                        <Label htmlFor="category" className="mb-2.5">Category</Label>
                        <Input
                            id="category"
                            placeholder="e.g., Science, History, Math"
                            className="focus-visible:ring-blue-400/80"
                        />
                    </div>
                    <Btn>
                        <div className="flex justify-center items-center w-full">
                            <Plus className="size-4 mr-2" />
                            <p>Add Question</p>
                        </div>
                    </Btn>
                </div>
            </div>
        </>
    );
};