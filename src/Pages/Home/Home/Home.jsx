import React from "react";
import Hero from "../Hero/Hero";
import NewsLetter from "../NewsLetter/NewsLetter";
import Services from "../Services/Services";

const Home = () => {
  return (
    <section id="home">
      <Hero />
      <Services />
      <NewsLetter />
    </section>
  );
};

export default Home;
