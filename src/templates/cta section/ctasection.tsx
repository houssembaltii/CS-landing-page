import { Roboto_slab, ThrashTalkFont } from "@/utils/fonts";
import Link from "next/link";
const CTASection = () => {
  return (
    <div className='bg-csblue-light'>
      <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8'>
        <h2
          className={` ${Roboto_slab.variable} font-roboto_slab text-3xl  tracking-tight text-white sm:text-4xl text-center lg:text-left xl:text-left 2xl:text-left`}
        >
          Vous avez des questions,
          <br />
          vous souhaitez travailler avec nous,
          <br /> contactez-nous.
        </h2>
        <div className='mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0 justify-center lg:justify-end md:justify-center '>
          <Link
            href='mailto:contact@camelstudiotunisie.com?subject=Contact%20Camel%20Studio'
            type='button'
            className='rounded-md bg-white px-6 py-3 text-base font-bold border border-white text-csblue-default   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 '
            target='_blank'
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CTASection;