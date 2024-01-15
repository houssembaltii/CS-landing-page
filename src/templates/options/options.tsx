import { Roboto_slab, ThrashTalkFont } from "@/utils/fonts";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import background from "./../../images/sideimages.jpeg";
import Link from "next/link";
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
const Options = () => {
  return (
    <section className='bg-white text-black'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <div className='mx-auto max-w-4xl sm:text-center '>
          {" "}
          <h2
            className={`${ThrashTalkFont.variable} font-thrashtalk mt-2 text-6xl sm:text-7xl md:text-7xl lg:text-7xl text-center font-bold tracking-tight text-csblue-default `}
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
        {/*  <Image
          src={background}
          alt='App screenshot'
          className=' rounded-xl shadow-2xl ring-1 ring-white/10 mx-auto'
          width={500}
          height={100}
        /> */}
        <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2'>
          <a
            className='block rounded-xl border border-white p-8 shadow-xl transition hover:border-csblue-default/10 hover:shadow-csblue-default/25'
            href='/services/digital-campaigns'
          >
            <p
              className={`${ThrashTalkFont.variable} font-thrashtalk  text-3xl text-csblue-default text-center`}
            >
              Option 1
            </p>{" "}
            <p
              className={`${Roboto_slab.variable} font-roboto_slab pt-16 text-base leading-8 text-gray-600 white lg:break-normal`}
            >
              Vous avez déjà une équipe en place et vous voulez la booster ?
              Aucun problème ! Prenez l&apos;un de nos développeurs, et non
              seulement vous aurez un professionnel dédié, mais vous aurez aussi
              accès à l&apos;expertise collective de toute notre équipe qui le
              soutient et l’épaule en coulisses.
            </p>
          </a>
          <a
            className='block rounded-xl border border-white p-8 shadow-xl transition hover:border-csblue-default/10 hover:shadow-csblue-default/25'
            href='/services/digital-campaigns'
          >
            <p
              className={`${ThrashTalkFont.variable} font-thrashtalk  text-3xl text-csblue-default text-center`}
            >
              Option 2
            </p>{" "}
            <p
              className={`${Roboto_slab.variable} font-roboto_slab pt-16 text-base leading-8 text-gray-600 white lg:break-normal `}
            >
              Vous préférez déléguer l&apos;intégralité de votre projet à notre
              équipe ? Laissez-nous prendre les rênes. Confiez-nous votre
              vision, et notre équipe de développement mettra en œuvre chaque
              ligne de code avec soin, du concept à la réalisation
            </p>
          </a>
        </div>

        <div className='mt-12 text-center'>
          <Link
            href='#'
            type='button'
            className='rounded-md bg-csblue-default px-6 py-3 text-base font-bold border border-white text-white   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Options;
