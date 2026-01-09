import { act, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  const [activeTab, setActiveTab] = useState("personal");

  function onTabChange(tab) {
    setActiveTab(tab);
  }

  return (
    <>
      <Header activeTab={activeTab} onTabChange={onTabChange}></Header>
      <Section activeTab={activeTab}></Section>
    </>
  );
}

export default App;
