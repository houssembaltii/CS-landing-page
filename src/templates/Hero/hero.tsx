import React from "react";
import Header from "./header/header";
import HeroContent from "./hero-content/heroconent";

const HeroPage = () => {
  return (
    <>
      <Header />
      <section>
        <HeroContent />
      </section>
    </>
  );
};

export default HeroPage;
