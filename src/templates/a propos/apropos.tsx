import { Roboto_slab, ThrashTalkFont } from "@/utils/fonts";
import React from "react";
import background from "./../../images/background-min.jpeg";
import Image from "next/image";
const AboutUsList = [
  {
    id: 1,
    title: "Ce qu'on sait faire ?",
    href: "#",
    description:
      "On fait du développement sur mesure, des applications web fluides et des solutions digitales qui marchent. On n'a pas de formules magiques, juste du bon boulot. On est sympa, mais surtout on est pros",
  },
  {
    id: 2,
    title: "Pourquoi nous ?",
    href: "#",
    description:
      "Pas de blabla, que du boulot : On va droit au but. Pas de promesses vides, juste des résultats concrets.Jeunes, mais pas novices : On est jeunes, mais on sait ce qu'on fait. Une bonne énergie et un bon mindset.Des prix raisonnables : On est basés en Tunisie, alors nos tarifs sont cool. Qualité pro, sans se ruiner.",
  },
  {
    id: 3,
    title: "On bosse comment ?",
    href: "#",
    description:
      "Si vous en avez marre des discours pompeux et que vous voulez des résultats tangibles, parlons de votre projet. Contactez-nous et discutons sérieusement de ce que l'on peut faire ensemble.",
  },
];

const Apropos = () => {
  return (
    <article className='bg-csblue-light  py-24' id='Apropos'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row'>
          <div className='w-full lg:max-w-lg lg:flex-auto'>
            <h2

              className={`${ThrashTalkFont.variable} font-thrashtalk text-6xl   font-bold tracking-tight text-white text-left sm:text-center md:text-left lg:text-left`}

            >
              Qui sommes-nous ?
            </h2>
            <p
              className={`${Roboto_slab.variable} font-roboto_slab mt-6  text-gray-200  text-base leading-8 lg:break-normal`}
            >
              Une équipe jeune mais pas novice, soudée et qui connaît le marché
              européen. Pas de blabla ici. On code, on design, on résout des
              problèmes. Notre équipe ? Des gens sympas qui aiment ce
              qu&apos;ils font et qui le font bien. On sait ce qui se passe sur
              le marché européen, et on sait comment s&apos;y prendre pour des
              projets qui dépotent.
            </p>
            <Image
              src={background}
              alt=' start ui image'
              className='mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]'
            />
          </div>
          <div className='w-full lg:max-w-xl lg:flex-auto'>
            <h3 className='sr-only'>Qui somme nous section</h3>
            <ul className='-my-8 divide-y divide-gray-100'>
              {AboutUsList.map((about) => (
                <li key={about.id} className='py-8'>
                  <dl className='relative flex flex-wrap gap-x-3'>
                    <dt className='sr-only'>title</dt>
                    <dd
                      className={`${ThrashTalkFont.variable} font-thrashtalk w-full flex-none  font-semibold tracking-tight text-white text-3xl lg:text-left text-center xl:text-left 2xl:text-left `}
                    >
                      <p>
                        {about.title}
                        <span className='absolute inset-0' aria-hidden='true' />
                      </p>
                    </dd>
                    <dt className='sr-only'>Description</dt>
                    <dd
                      className={`${Roboto_slab.variable} font-roboto_slab mt-2 w-full flex-none text-base leading-7 text-gray-200 lg:break-normal`}
                    >
                      {about.description}
                    </dd>

                    <dt className='sr-only'>Alignment with picture </dt>
                    <dd className='mt-4 flex items-center gap-x-3 text-base leading-7 text-white'>
                      <svg
                        viewBox='0 0 2 2'
                        className='h-0.5 w-0.5 flex-none fill-gray-300'
                        aria-hidden='true'
                      ></svg>
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Apropos;
