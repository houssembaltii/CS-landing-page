import { Roboto_slab, ThrashTalkFont } from "@/utils/fonts";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  RectangleStackIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Création d’application web sur mesure",
    description:
      "Au Camel Studio, on crée des sites web adaptés à vos besoins. Pas de superflu, juste des solutions efficaces et un espace unique pour votre présence en ligne.",
    href: "#",
    icon: CodeBracketIcon,
  },
  {
    name: "Exploration mobile",
    description:
      "Plongez dans le monde mobile avec nos applications spécialement conçues pour vos aventures sur iOS et Android. Ici, on se démène pour vous offrir une expérience utilisateur exceptionnelle, où que vous soyez.",
    href: "#",
    icon: DevicePhoneMobileIcon,
  },

  {
    name: "Guide tech",
    description:
      "On n'est pas que des codeurs, on est là pour vous guider dans le monde de la tech et être votre allié dans vos prises de décisions.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },

  {
    name: "Conseils en développement",
    description:
      "Au Camel Studio, on ne vous embrouille pas avec du jargon tech et une terminologie perchée. On parle votre langue et on vous explique les choses étape par étape, afin de trouver les solutions optimales pour votre projet. On ne fait pas dans le compliqué, on fait le job.",
    href: "#",
    icon: InformationCircleIcon,
  },

  {
    name: "Gestion de projet carrée ",
    description:
      " On prend en charge votre projet et on le mène à bien. Peu importe l’étape de son avancement, on saura s’y greffer et le faire décoller",
    href: "#",
    icon: RectangleStackIcon,
  },

  {
    name: "Design UX/UI malin ",
    description:
      "Notre équipe crée des interfaces qui fonctionnent bien, propres et au goût du jour. Pas de trucs tape-à-l'œil, mais des designs intelligents.",
    href: "#",
    icon: ComputerDesktopIcon,
  },
];
const Prestation = () => {
  return (
    <div className='bg-white py-24 sm:py-32 ' id='Prestations'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2
            className={`${ThrashTalkFont.variable} font-thrashtalk mt-2 -ml-12 text-6xl sm:text-7xl  lg:text-7xl md:text-7xl xl:text-7 2xl:text-7xl font-bold tracking-tight text-csblue-default text-center `}
          >
            Nos Prestations
          </h2>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none sm:mx-32 lg:mx-0 md:mx-32'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-24 gap-y-16 lg:max-w-none lg:grid-cols-3 '>
            {features.map((feature) => (
              <div key={feature.name} className='flex flex-col '>
                <dt className='flex-none  gap-x-3  text-base  leading-7 text-black '>
                  {/* <Image
                    className='h-10 w-10  text-indigo-400 mx-auto lg:mx-0 '
                    src={feature.icon}
                    alt={feature.name}
                    height={50}
                    width={50}
                  /> */}
                  <div className='mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-csblue-default mx-auto lg:mx-0'>
                    <feature.icon
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    />
                  </div>

                  <p
                    className={`${ThrashTalkFont.variable} font-thrashtalk pt-5 text-black  text-center ml-5 lg:ml-0  md:ml-8 lg:text-left  text-3xl `}
                  >
                    {feature.name}
                  </p>
                </dt>
                <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 '>
                  <p
                    className={` ${Roboto_slab.variable} font-roboto_slab lg:break-normal    md:pl-0 lg:pl-0  xl:px-0 2xl:px-0 md:text-center lg:text-left sm:text-center  `}
                  >
                    {feature.description}
                  </p>
                  <p className='mt-6'></p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Prestation;
