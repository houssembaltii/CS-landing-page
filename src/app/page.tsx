import HeroPage from "@/templates/Hero/hero";
import Apropos from "@/templates/a propos/apropos";

import Footer from "@/templates/footer/footer";
import Options from "@/templates/options/options";
import Prestation from "@/templates/prestations/prestation";

export default function Home() {
  return (
    <main>
      <HeroPage />
      <Prestation />
      <Apropos />
      <Options />
      <Footer />
    </main>
  );
}
