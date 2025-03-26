import React from "react";
import QueryEditor from "./components/QueryEditor";
import QuerySelector from "./components/QuerySelector";
import ResultTable from "./components/ResultTable";

const App = () => {
  return (
    <div className="app">
      <h1>SQL Query Runner</h1>
      <QuerySelector />
      <QueryEditor />
      <ResultTable />
    </div>
  );
};

export default App;
