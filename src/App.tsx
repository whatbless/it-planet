import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import SecondComponent from "./components/SecondComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <MainComponent />
      <SecondComponent />
    </div>
  );
}

export default App;
