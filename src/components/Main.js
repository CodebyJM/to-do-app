import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navbar";
import Tools from "./Tools.js";


class Main extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Header />
        <Tools />
        <Footer />
      </>
    );
  }
}

export default Main;
