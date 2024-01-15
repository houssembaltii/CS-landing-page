import HeroPage from "@/templates/Hero/hero";
import Apropos from "@/templates/a propos/apropos";
import AproposM from "@/templates/a propos/aproposm";

import Footer from "@/templates/footer/footer";
import OptionList from "@/templates/options/option";
import Options from "@/templates/options/options";
import Prestation from "@/templates/prestations/prestation";
import Pr from "@/templates/prestations/prestations";

export default function Home() {
  return (
    <main>
      <HeroPage />

      <Prestation />
      {/*  <Pr /> */}
      <Apropos />
      {/*  <AproposM /> */}

      {/*   <OptionList /> */}
      <Options />
      <Footer />
    </main>
  );
}
