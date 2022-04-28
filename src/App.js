import React from "react";
import "./App.css";
import Header from "./Header";

function App() {
  const currentDate = new Date();
  const curentMonth = currentDate.getMonth() + 1;

  return (
    <div className="App">
      <Header month={curentMonth} />
    </div>
  );
}

export default App;
