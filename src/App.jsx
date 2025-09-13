import React from "react";
import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Body from "./components/layout/Body";

export default function App() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "66px" }}>
        <Body />
        <Footer />
      </div>
    </>
  );
}
