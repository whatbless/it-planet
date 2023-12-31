import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";
import Favors from "./components/Favors";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MainComponent />
      <SecondComponent />
      <ThirdComponent />
      <Favors />
      <Footer />
    </div>
  );
}

export default App;
