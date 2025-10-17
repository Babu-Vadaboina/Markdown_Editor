import { useState } from "react";
import "./App.css";
import Ed

function App() {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/2">
          <Editor />
        </div>
        <div className="w-1/2">
          <preview />
        </div>
      </div>
    </>
  );
}

export default App;
