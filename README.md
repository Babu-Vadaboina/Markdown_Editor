React + TypeScript Markdown Editor
==================================

A modern, responsive markdown editor built with React and TypeScript. Features live preview, dark/light theme, and easy local setup.

Setup Instructions
------------------

1.  bashgit clone https://github.com/your-username/markdown-editor-ts.gitcd markdown-editor-ts
    
2.  bashnpm install# oryarn install
    
3.  bashnpm start# oryarn startYour app will be available at http://localhost:3000/
    

Project Structure
-----------------

*   src/App.tsx – Main layout, split editor/preview, theme toggle
    
*   src/components/Editor.tsx – Markdown text editor
    
*   src/components/Preview.tsx – Live markdown preview using [react-markdown](https://github.com/remarkjs/react-markdown)
    
*   src/components/ThemeToggle.tsx – Light/Dark Mode button
    
*   src/index.css – Clean, responsive, theme-aware styles
    

Features
--------

*   **Live Markdown Editing:** See preview as you type.
    
*   **Responsive Layout:** Editor and preview each take half the screen, stacking on mobile.
    
*   **Dark/Light Theme:** Toggle instantly with the theme button.
    
*   **Persistent State:** Last-edited markdown and theme saved in browser.
    
*   **Simple File Structure:** Easy to understand and extend.
    

Future Enhancements
-------------------

*   **Scroll Sync:** Synchronize scroll position between editor and preview panes.
    
*   **Export & Import:** Save/edit markdown files locally.
    
*   **Syntax Highlighting:** For code blocks in preview.
    
*   **Custom Themes:** User-selectable color schemes.
    
*   **Toolbar:** Formatting buttons for quick markdown inserts.
    

How to Contribute
-----------------

1.  Fork the repo and create your branch (git checkout -b feature/my-feature)
    
2.  Commit your changes (git commit -am 'Add new feature')
    
3.  Push to the branch (git push origin feature/my-feature)
    
4.  Create a Pull Request
