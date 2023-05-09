import React from "react";
import "./App.css";
import CurrencyRow from "./CurrencyRow";

function App() {
  return (
    <>
      <div className="App">
        <h1>Hello World</h1>
        <CurrencyRow />
        <div className="equals">=</div>
        <CurrencyRow />
      </div>
    </>
  );
}

export default App;
