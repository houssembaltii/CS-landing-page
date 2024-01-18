import Image from "next/image";
import Link from "next/link";
import React, { SVGProps } from "react";
import csBlackLogo from "./../../images/cs-color-logotype.png";
const navigation = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/company/camelstudio/",
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5'
        fill='currentColor'
        viewBox='0 0 24 24'
      >
        <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
      </svg>
    ),
  },
];
import cslogo from "../../images/cs-white-logo.png";
import { Roboto_slab } from "@/utils/fonts";
const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className='mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex justify-center space-x-6 md:order-2'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-csblue-default'
              rel='noopener noreferrer'
              target='_blank'
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </Link>
          ))}
        </div>
        <div className='mt-8 md:order-1 md:mt-0 flex items-center space-x-4 justify-center'>
          <Image
            src={csBlackLogo}
            height={50}
            width={50}
            priority
            alt='camel studio logo'
          />
          <Link
            href='#'
            className={`${Roboto_slab.variable} font-roboto_slab  text-center text-xl leading-5 text-csblue-default`}
          >
            Camel Studio
          </Link>
          <p
            className={`${Roboto_slab.variable} font-roboto_slab  text-center text-base leading-5 text-gray-600`}
          >
            {new Date().getFullYear()} © Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
