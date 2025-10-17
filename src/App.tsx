import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";

function App() {
  const [markdown, setMarkdown] = useState("# HelloWorld");
  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/2">
          <Editor value={markdown} onChange={setMarkdown} />
        </div>
        <div className="w-1/2"></div>
      </div>
    </>
  );
}

export default App;
