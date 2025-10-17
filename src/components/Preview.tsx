import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface PreviewProps {
  markdown: string;
}

const Preview: React.FC<PreviewProps> = ({ markdown }) => {
  return (
    <div className="flex flex-col h-full border border-gray-300 rounded-lg">
      <div className="bg-gray-100 px-4 py-2 font-semibold border-b text-gray-700">
        Preview 👀
      </div>
      <div className="flex-1 p-3 overflow-y-auto bg-white prose prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Preview;
