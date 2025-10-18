import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface PreviewProps {
  markdown: string;
}
const Preview: React.FC<PreviewProps> = ({ markdown }) => (
  <div className="preview-container">
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
  </div>
);
export default Preview;
