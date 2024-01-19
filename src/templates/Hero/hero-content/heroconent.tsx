import { Roboto_slab, ThrashTalkFont } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import background from "../../../images/Mask group-min.jpg";
const HeroContent = () => {
  return (
    <div className='relative isolate ml-0 overflow-hidden pt-14 lg:-ml-1'>
      <Image
        src={background}
        alt=''
        className='absolute inset-0 -z-10 h-full w-full object-cover '
        priority
      />
      <div
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        aria-hidden='true'
      >
        <div
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
        <div className='hidden sm:mb-8 sm:flex sm:justify-center' />

        <div className='text-center'>
          <h1
            className={`${ThrashTalkFont.variable} font-thrashtalk text-4xl font-bold tracking-tight text-white sm:text-7xl`}
          >
            boîte de développeurs agiles et résilients
          </h1>
          <p
            className={`${Roboto_slab.variable} font-roboto_slab mt-6 text-lg leading-8 text-gray-200 `}
          >
            Au Camel Studio on sait comment garder la tête froide même dans les
            projets les plus chauds. Pas de bosses, que des solutions.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6  '>
            <Link
              href='mailto:contact@camelstudiotunisie.com?subject=Contact%20Camel%20Studio'
              type='button'
              className={`${Roboto_slab.variable} font-roboto_slab rounded-md bg-white px-6 py-3 text-base border border-white text-csblue-default   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-none`}
              target='_blank'
            >
              Contactez-nous
            </Link>
            <Link
              href='#options'
              className={`${Roboto_slab.variable} font-roboto_slab text-sm  leading-6 text-white`}
            >
              En savoir plus <span aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>
      </div>
      <div
        className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
        aria-hidden='true'
      >
        <div
          className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default HeroContent;
