import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CSVUploader } from "./utils/CSVUploader";

function App() {
  return (
    <div className="App">
      <CSVUploader />
    </div>
  );
}

export default App;
