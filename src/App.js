import React from "react";
import "./App.css";
import CardList from "./CardList";
import Header from "./Header";

function App() {
  const currentDate = new Date();
  const curentMonth = currentDate.getMonth() + 1;

  return (
    <div className="App">
      <Header month={curentMonth} />
      <CardList />
    </div>
  );
}

export default App;
