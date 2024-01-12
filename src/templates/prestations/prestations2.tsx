import { Roboto_slab, ThrashTalkFont } from "@/utils/fonts";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";
import webLogo from "../../images/web_dev.png";
import mobileLogo from "../../images/mobile_dev.png";
import guideTech from "../../images/tech_guide.png";
import conseilDev from "../../images/conseils.png";
import gestionProjet from "../../images/gestion_projet.png";
import uxUi from "../../images/uxui.png";
import Image from "next/image";
const features = [
  {
    name: "Création d’application web sur mesure",
    description:
      "Au Camel Studio, on crée des sites web adaptés à vos besoins. Pas de superflu, juste des solutions efficaces et un espace unique pour votre présence en ligne.",
    href: "#",
    icon: webLogo,
    ButtonText: "j'ai besoin d'un site web",
  },
  {
    name: "Exploration mobile",
    description:
      "Plongez dans le monde mobile avec nos applications spécialement conçues pour vos aventures sur iOS et Android. Ici, on se démène pour vous offrir une expérience utilisateur exceptionnelle, où que vous soyez.",
    href: "#",
    icon: mobileLogo,
    ButtonText: "j'ai besoin d'une application mobile",
  },
  {
    name: "Guide tech",
    description:
      "On n'est pas que des codeurs, on est là pour vous guider dans le monde de la tech et être votre allié dans vos prises de décisions.",
    href: "#",
    icon: guideTech,
    ButtonText: "j'ai besoin d'un guide tech",
  },
  {
    name: "Conseils en développement",
    description:
      "Au Camel Studio, on ne vous embrouille pas avec du jargon tech et une terminologie perchée. On parle votre langue et on vous explique les choses étape par étape, afin de trouver les solutions optimales pour votre projet. On ne fait pas dans le compliqué, on fait le job.",
    href: "#",
    icon: conseilDev,
    ButtonText: "j'ai besoin de conseils",
  },
  {
    name: "Gestion de projet carrée ",
    description:
      " On prend en charge votre projet et on le mène à bien. Peu importe l’étape de son avancement, on saura s’y greffer et le faire décoller",
    href: "#",
    icon: gestionProjet,
    ButtonText: "j'ai besoin de gestion ",
  },
  {
    name: "Design UX/UI malin ",
    description:
      "Notre équipe crée des interfaces qui fonctionnent bien, propres et au goût du jour. Pas de trucs tape-à-l'œil, mais des designs intelligents.",
    href: "#",
    icon: webLogo,
    ButtonText: "j'ai besoin de design UX/UI",
  },
];
const PrestationPage = () => {
  return (
    <article className='bg-white py-24 sm:py-32 ' id='Prestations'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <p
            className={`${ThrashTalkFont.variable} font-thrashtalk mt-2 text-6xl sm:text-7xl  lg:text-7xl md:text-7xl xl:text-7 2xl:text-7xl font-bold tracking-tight text-csblue-default text-center `}
          >
            Nos Prestations
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-24 gap-y-16 lg:max-w-none lg:grid-cols-2'>
            {features.map((feature, index) => (
              <div key={feature.name} className='flex flex-col '>
                <dt className='flex-none  gap-x-3  text-base  leading-7 text-black '>
                  <Image
                    className='h-10 w-10  text-indigo-400 mx-auto   '
                    src={feature.icon}
                    alt={feature.name}
                    height={50}
                    width={50}
                  />
                  <p
                    className={`${ThrashTalkFont.variable} font-thrashtalk pt-5 text-black  text-center  lg:text-center text-3xl `}
                  >
                    {feature.name}
                  </p>
                </dt>
                <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 '>
                  <p
                    className={` ${Roboto_slab.variable} font-roboto_slab flex-auto lg:break-normal  md:text-center lg:text-center`}
                  >
                    {feature.description}
                  </p>
                  <button className='relative px-8 py-2 text-white mx-auto mt-6 rounded-md bg-csblue-light isolation-auto z-10 border-2 border-csblue-default hover:bg-csblue-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 '>
                    {feature.ButtonText}
                  </button>
                  <p className='mt-6'></p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </article>
  );
};
export default PrestationPage;
