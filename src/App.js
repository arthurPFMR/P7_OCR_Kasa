import React from "react";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Router from "./router/Router";

const App = () => {
  return (
    <>
      <Navigation />
      <Router />
      <Footer />
    </>
  );
};

export default App;
