import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  const [markdown, setMarkdown] = useState("# HelloWorld");
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
