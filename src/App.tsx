import { useEffect } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import ThemeToggle from "./components/ThemeToggle";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [markdown, setMarkdown] = useLocalStorage("markdown", "");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="app-container">
      {/* Header row */}
      <div className="app-header">
        <div className="logo">Markdown Editor</div>
        <ThemeToggle />
      </div>
      {/* Pane headings & split container */}
      <div className="editor-preview-container">
        <div className="pane-column">
          <div className="pane-heading">Editor</div>
          <Editor value={markdown} onChange={setMarkdown} />
        </div>
        <div className="pane-column">
          <div className="pane-heading">Preview 👀</div>
          <Preview markdown={markdown} />
        </div>
      </div>
    </div>
  );
}
export default App;
