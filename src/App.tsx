import Editor from "./components/Editor";
import Preview from "./components/Preview";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [markdown, setMarkdown] = useLocalStorage("markdown", "");
  return (
    <>
      <div className="flex h-screen p-4 gap-4">
        <div className="flex-1">
          <Editor value={markdown} onChange={setMarkdown} />
        </div>
        <div className="flex-1">
          <Preview markdown={markdown} />
        </div>
      </div>
    </>
  );
}

export default App;
