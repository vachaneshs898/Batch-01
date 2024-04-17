import Footer from "componants/Footer";
import Header from "componants/Header";
import Button from "componants/UI/Button";
import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <Header />
      <h1>This is about us page</h1>

      <Button>
        <Link to="/">Home</Link>
      </Button>
      <Footer />
    </div>
  );
}

export default AboutUs;
