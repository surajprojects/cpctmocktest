import AddQuestion from "@/components/quiz/admin/addQuestion";
import AllQuestions from "@/components/quiz/admin/allQuestions";
import BulkQuestions from "@/components/quiz/admin/bulkQuestions";

export default function AdminMockTest() {
    return (
        <>
            <div className="grow p-7 lg:p-9 flex flex-col md:flex-row gap-8">
                <div className="flex flex-col gap-6 md:gap-8 grow">
                    <AddQuestion />
                    <BulkQuestions />
                </div>
                <AllQuestions />
            </div>
        </>
    );
};