import { FileCode } from "lucide-react";

export default function BulkQuestions() {
    return (
        <>
            <div className="shadow-sm border border-gray-200 rounded-xl p-6 bg-white">
                <p className="font-sans font-semibold flex items-center"><FileCode className="size-5 mr-2" />Upload JSON</p>
                <p className="font-sans text-gray-500 text-sm mt-0.5">Bulk import questions from a JSON file</p>
                <div className="bg-gray-100 rounded-xl p-5 mt-2">
                    <p className="text-xs font-semibold font-sans mb-2">Expected JSON format:</p>
                    <pre className="text-gray-500 text-xs">
                        <code>
                            &#91;<br />
                            &nbsp;&#123;<br />
                            &nbsp;&nbsp;"question": "Sample question?",<br />
                            &nbsp;&nbsp;"options": &#91;"A", "B", "C", "D"&#93;,<br />
                            &nbsp;&nbsp;"correctAnswer": 2,<br />
                            &nbsp;&nbsp;"category": "General"<br />
                            &nbsp;&#125;,<br />
                            &nbsp;&#123;<br />
                            &nbsp;&nbsp;"question": "Sample question?",<br />
                            &nbsp;&nbsp;"options": &#91;"A", "B", "C", "D"&#93;,<br />
                            &nbsp;&nbsp;"correctAnswer": 2,<br />
                            &nbsp;&nbsp;"category": "General"<br />
                            &nbsp;&#125;,<br />
                            &#93;
                        </code>
                    </pre>
                </div>
            </div>
        </>
    );
};