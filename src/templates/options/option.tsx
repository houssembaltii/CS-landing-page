import React from "react";
import { Roboto_slab, ThrashTalkFont } from "@/utils/fonts";
import staruiLogo from "../../images/startui.jpg";
import Image from "next/image";
const features = [
  {
    name: "Option 1",
    description:
      "Vous avez déjà une équipe en place et vous voulez la booster ? Aucun problème ! Prenez l'un de nos développeurs, et non seulement vous aurez un professionnel dédié, mais vous aurez aussi accès à l'expertise collective de toute notre équipe qui le soutient et l’épaule en coulisses.  ",
  },
  {
    name: "Option 2",
    description:
      " Vous préférez déléguer l'intégralité de votre projet à notre équipe ? Laisse-nous prendre les rênes. Confiez-nous votre vision, et notre équipe de développement mettra en œuvre chaque ligne de code avec soin, du concept à la réalisation.",
  },
];
const OptionList = () => {
  return (
    <section className='bg-white py-24 sm:py-32' id='options'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl sm:text-center '>
          <h2
            className={`${ThrashTalkFont.variable} font-thrashtalk mt-2 text-6xl sm:text-7xl md:text-7xl lg:text-xl text-center font-bold tracking-tight text-csblue-default `}
          >
            Développer votre projet avec le Camel Studio
          </h2>

          <p
            className={`${Roboto_slab.variable} font-roboto_slab mt-6 text-base leading-8 text-gray-600 white lg:break-normal`}
          >
            Chez Camel Studio, nous croyons en la force de l&apos;équipe et en
            une collaboration unie. Optez pour nous, c&apos;est choisir une
            véritable famille de développeurs déterminés à faire briller votre
            vision. Malgré nos projets divers, l&apos;esprit d&apos;équipe reste
            fort. Nous comprenons les besoins spécifiques de chaque projet,
            offrant ainsi deux options flexibles pour répondre à vos attentes.
          </p>
        </div>
      </div>
      <div className='relative overflow-hidden pt-16'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <Image
            src={staruiLogo}
            alt='Start ui '
            className=' rounded-xl shadow-2xl ring-1 ring-gray-900/10'
            width={2432}
            height={1442}
          />
          <div className='relative' aria-hidden='true'>
            <div className='absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]' />
          </div>
        </div>
      </div>
      <div className='mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8  '>
        <dl className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-1 md:grid-cols-1 lg:-mx-12 lg:max-w-none  lg:break-all lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16'>
          {features.map((feature) => (
            <div key={feature.name} className='relative '>
              <dt
                className={`${ThrashTalkFont.variable} font-thrashtalk  text-3xl text-csblue-default text-center`}
              >
                {feature.name}
              </dt>{" "}
              <dd
                className={`${Roboto_slab.variable} font-roboto_slab text-gray-600 text-base mt-6 px-24 break-normal `}
              >
                {feature.description}
              </dd>
              <button
                type='button'
                className='rounded-md mx-auto block  mt-5 bg-csblue-light px-3.5 py-2.5 text-sm font-semibold text-center text-white shadow-sm hover:bg-csblue-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Contactez nous
              </button>
            </div>
          ))}
        </dl>
        <p
          className={`${Roboto_slab.variable} font-roboto_slab text-gray-600 text-center mt-16 px-16 lg:px-40 md:px-24 text-base break-normal `}
        >
          Chez Camel Studio, on est fiers de notre esprit d&apos;équipe et on
          est prêts à vous accompagner, que vous ayez besoin d&apos;un renfort
          ponctuel ou d&apos;une conception complète. Faites équipe avec nous,
          et ensemble, on fera de votre vision une réalité. 🚀🐪
        </p>
      </div>
    </section>
  );
};

export default OptionList;
