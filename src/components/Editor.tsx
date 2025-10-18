interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}
const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };
  return (
    <div className="editor-container">
      <textarea
        id="markdown-editor"
        className="editor-textarea"
        value={value}
        onChange={handleInputChange}
        placeholder="Write your markdown here..."
        spellCheck={false}
      />
    </div>
  );
};
export default Editor;
