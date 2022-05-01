import React from "react";
import "./App.css";
import CardList from "./CardList";
import Header from "./Header";

function App() {
  const currentDate = new Date();

  return (
    <div className="App">
      <Header month={currentDate.getMonth() + 1} />
      <CardList currentDate={currentDate} />
    </div>
  );
}

export default App;
