interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}
const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };
  return (
    <div className="flex flex-col h-full border border-gray-300 rounded-lg">
      <div className="bg-gray-100 px-4 py-2 font-semibold border-b text-gray-700">
        Editor
      </div>
      <textarea
        className="flex-1 p-3 font-mono text-sm resize-none outline-none bg-white text-gray-800"
        value={value}
        onChange={handleInputChange}
        placeholder="Type your markdown here"
      ></textarea>
    </div>
  );
};
export default Editor;
