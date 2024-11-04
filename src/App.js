import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Destination from "./Components/Destination/Destination";
import Crew from "./Components/Crew/Crew";
import Technology from "./Components/Technology/Technology";

function App() {
  const [activeComponent, setActiveComponent] = useState("Home");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Home":
        return <Home setActiveComponent={setActiveComponent} />;
      case "Destination":
        return <Destination setActiveComponent={setActiveComponent} />;
      case "Crew":
        return <Crew setActiveComponent={setActiveComponent} />;
      case "Technology":
        return <Technology setActiveComponent={setActiveComponent} />;
      default:
        return <Home setActiveComponent={setActiveComponent} />;
    }
  };

  return <div className="App">{renderComponent()}</div>;
}

export default App;
