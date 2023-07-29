import React from "react";
import Navbar from "./components/navbar";
import ShippingContent from "./components/ShippingContent";
import SpecsSection from "./components/SpecsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <ShippingContent />
      <SpecsSection />
      <Footer />
    </>
  );
}

export default App;
