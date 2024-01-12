import HeroPage from "@/templates/Hero/hero";
import Apropos from "@/templates/a propos/apropos";
import Footer from "@/templates/footer/footer";
import OptionList from "@/templates/options/option";
import Prestation from "@/templates/prestations/prestation";

export default function Home() {
  return (
    <main>
      <HeroPage />

      <Prestation />

      <Apropos />
      <OptionList />
      <Footer />
    </main>
  );
}
