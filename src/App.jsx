import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Section></Section>
      <Footer></Footer>
    </>
  );
}

export default App;
