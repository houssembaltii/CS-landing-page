import HeroPage from "@/templates/Hero/hero";
import Apropos from "@/templates/a propos/apropos";
import Footer from "@/templates/footer/footer";
import OptionList from "@/templates/options/option";
import PrestationPage from "@/templates/prestations/prestations2";

export default function Prestations() {
  return (
    <main>
      <HeroPage />

      <PrestationPage />
      <Apropos />
      <OptionList />
      <Footer />
    </main>
  );
}
