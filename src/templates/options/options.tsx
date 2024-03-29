import { Roboto_slab, ThrashTalkFont } from "@/utils/fonts";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

import CTASection from "../cta section/ctasection";

const features = [
  {

    name: "vous avez déjà une équipe à booster ",
    description:
      "Vous avez déjà une équipe en place et vous voulez la booster ? Aucun problème ! Prenez l'un de nos développeurs, et non seulement vous aurez un professionnel dédié, mais vous aurez aussi accès à l'expertise collective de toute notre équipe qui le soutient et l’épaule en coulisses.  ",
    icon: CheckCircleIcon,
  },
  {

    name: "votre équipe c'est nous",
    description:
      " Vous préférez déléguer l'intégralité de votre projet à notre équipe ? Laisse-nous prendre les rênes. Confiez-nous votre vision, et notre équipe de développement mettra en œuvre chaque ligne de code avec soin, du concept à la réalisation.",
    icon: CheckCircleIcon,
  },
];

const Options = () => {
  return (
    <article className='bg-white pt-24 sm:pt-32' id='options'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-5xl'>
          <h2
            className={`${ThrashTalkFont.variable} font-thrashtalk mt-2 text-6xl   sm:text-7xl md:text-7xl lg:text-7xl   font-bold tracking-tight text-csblue-default `}
          >
            Développer votre projet avec Camel Studio
          </h2>
          <p
            className={`${Roboto_slab.variable} font-roboto_slab mt-6 text-base leading-8 text-gray-600   lg:max-w-3xl`}
          >
            Chez Camel Studio, nous croyons en la force de l&apos;équipe et en
            une collaboration unie. Optez pour nous, c&apos;est choisir une
            véritable famille de développeurs déterminés à faire briller votre
            vision. Malgré nos projets divers, l&apos;esprit d&apos;équipe reste
            fort. Nous comprenons les besoins spécifiques de chaque projet,
            offrant ainsi deux options flexibles pour répondre à vos attentes.
          </p>
        </div>
        <dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16'>
          {features.map((feature) => (
            <div
              key={feature.name}
              className='relative pl-0 lg:pl-9 md:pl-9 sm:pl-6'
            >
              <dt
                className={`${ThrashTalkFont.variable} font-thrashtalk  text-3xl text-csblue-default text-center sm:text-left md:text-left lg:text-left xl:text-left 2xl:text-left mb-3`}
              >
                <feature.icon
                  className='absolute -left-2 top-1 h-7 w-7 text-csblue-default invisible lg:visible md:visible sm:visible '
                  aria-hidden='true'
                />
                {feature.name}
              </dt>

              <dd
                className={` ${Roboto_slab.variable} font-roboto_slab inline text-gray-600  `}
              >
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className='pt-24 sm:pt-32'>

        <CTASection />
      </div>
    </article>
  );
};
export default Options;
