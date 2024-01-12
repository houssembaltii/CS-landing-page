import React from "react";
import Header from "./header/header";
import HeroContent from "./hero-content/heroconent";

const HeroPage = () => {
  return (
    <>
      <Header />
      <section className='bg-gray-900'>
        <HeroContent />
      </section>
    </>
  );
};

export default HeroPage;
