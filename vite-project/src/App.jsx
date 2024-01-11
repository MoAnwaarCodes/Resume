import React from "react";
import Resume from "./Component/Resume";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import AddProject from "./Component/AddProject";
const App = () => {
  return (
    <div>
      {/* <Resume></Resume> */}
      <AddProject></AddProject>
      </div>
  );
};

export default App;
