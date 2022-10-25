import Main from "../components/Main";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return <div className="flex min-h-screen flex-col">
    <Header />
    <Main>Cześć michal</Main>
    <Footer/>
  </div>;
};

export default About;
