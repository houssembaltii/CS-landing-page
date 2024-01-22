import { Roboto_slab, ThrashTalkFont } from "@/utils/fonts";
import Link from "next/link";
const CTASection = () => {
  return (
    <div className='bg-csblue-light'>
      <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8 '>
        <div
          className={` ${Roboto_slab.variable} font-roboto_slab text-3xl  tracking-tight text-white sm:text-4xl text-center lg:text-left xl:text-left 2xl:text-left`}
        >
          Ça vous intéresse ?
          <br />
          Vous avez des questions ?
          <br />
          vous souhaitez collaborer avec nous ?
          <br />
          <div
            className={` ${Roboto_slab.variable} font-roboto_slab text-xl tracking-tight pt-4`}
          >
            Envoyez-nous un mail sur : contact@camelstudiotunisie.com
          </div>
          <div
            className={` ${Roboto_slab.variable} font-roboto_slab text-xl tracking-tight`}
          >
            Ou nous appeler au +216 22 222 222.
          </div>
        </div>

        <div className='mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0 justify-center lg:justify-end md:justify-center '>
          <Link
            href='mailto:contact@camelstudiotunisie.com?subject=Contact%20Camel%20Studio'
            type='button'
            className={`${Roboto_slab.variable} font-roboto_slab rounded-md bg-white px-6 py-3 text-base border border-white text-csblue-default focus:outline-none focus:ring-4 focus:ring-csblue-default`}
            target='_blank'
          >
            Écrivez-nous ici
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CTASection;
