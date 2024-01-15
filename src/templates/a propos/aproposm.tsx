import { Roboto_slab, ThrashTalkFont } from "@/utils/fonts";
import "./apropos.css";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import sideImage from "./../../images/sideimages.jpeg";
const jobOpenings = [
  {
    id: 1,
    titre: "Ce qu'on sait faire ?",
    href: "#",
    description:
      "On fait du développement sur mesure, des applications web fluides et des solutions digitales qui marchent. On n'a pas de formules magiques, juste du bon boulot. On est sympa, mais surtout on est pros",
  },
  {
    id: 2,
    titre: "Pourquoi nous ?",
    href: "#",
    description:
      "Pas de blabla, que du boulot : On va droit au but. Pas de promesses vides, juste des résultats concrets.Jeunes, mais pas novices : On est jeunes, mais on sait ce qu'on fait. Une bonne énergie et un bon mindset.Des prix raisonnables : On est basés en Tunisie, alors nos tarifs sont cool. Qualité pro, sans se ruiner.",
  },
  {
    id: 3,
    titre: "On bosse comment ?",
    href: "#",
    description:
      "Si vous en avez marre des discours pompeux et que vous voulez des résultats tangibles, parlons de votre projet. Contactez-nous et discutons sérieusement de ce que l'on peut faire ensemble.",
  },
];
const AproposM = () => {
  return (
    <div className='relative isolate overflow-hidden bg-csblue-light px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 '>
      <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 '>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='lg:max-w-lg'>
              <h1
                className={`${ThrashTalkFont.variable} font-thrashtalk text-6xl   font-bold tracking-tight text-white text-center`}
              >
                Qui sommes-nous ?
              </h1>
              <p
                className={`${Roboto_slab.variable} font-roboto_slab mt-6  text-gray-200  text-base leading-8 lg:break-normal`}
              >
                Une équipe jeune mais pas novice, soudée et qui connaît le
                marché européen. Pas de blabla ici. On code, on design, on
                résout des problèmes. Notre équipe ? Des gens sympas qui aiment
                ce qu&apos;ils font et qui le font bien. On sait ce qui se passe
                sur le marché européen, et on sait comment s&apos;y prendre pour
                des projets qui dépotent.
              </p>
            </div>
          </div>
        </div>
        <div className='-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
          <Image
            src={sideImage}
            className='w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
            alt=''
          />
        </div>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg'>
              {/*  <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p> */}

              <ul role='list' className='mt-8 space-y-8 text-gray-600'>
                {jobOpenings.map((el) => (
                  <li key={el.id}>
                    <dl className='relative flex flex-wrap gap-x-3'>
                      <dt className='sr-only'>Role</dt>
                      <dd
                        className={`${ThrashTalkFont.variable} font-thrashtalk w-full flex-none  font-semibold tracking-tight text-white text-3xl lg:text-left text-center xl:text-left 2xl:text-left `}
                      >
                        <p>
                          {el.titre}
                          <span
                            className='absolute inset-0'
                            aria-hidden='true'
                          />
                        </p>
                      </dd>
                      <dt className='sr-only'>Description</dt>
                      <dd
                        className={`${Roboto_slab.variable} font-roboto_slab mt-4 w-full flex-none text-base leading-7 text-gray-200 lg:break-normal`}
                      >
                        {el.description}
                      </dd>

                      <dt className='sr-only'>Location</dt>
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

                {/*    <li className='flex gap-x-3'>
                  <CloudArrowUpIcon
                    className='mt-1 h-5 w-5 flex-none text-indigo-600'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      Ce qu&apos;on sait faire ?.
                    </strong>{" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  <LockClosedIcon
                    className='mt-1 h-5 w-5 flex-none text-indigo-600'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      SSL certificates.
                    </strong>{" "}
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  <ServerIcon
                    className='mt-1 h-5 w-5 flex-none text-indigo-600'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      Database backups.
                    </strong>{" "}
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li> */}
              </ul>
              {/*  <p className='mt-8'>
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
              <h2 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>
                No server? No problem.
              </h2>
              <p className='mt-6'>
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
                vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
                enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AproposM;
