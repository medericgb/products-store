import React from "react";
import "./styles.css";

import { BrowserRouter as Router } from "react-router-dom";

import Main from "./Components/Main";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
