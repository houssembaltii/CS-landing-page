"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import Link from "next/link";

import { ThrashTalkFont } from "@/utils/fonts";
import { Roboto_slab } from "@/utils/fonts";

import { cn } from "@/utils/utils";

const navigation = [
  { name: "Prestations", href: "#Prestations" },
  { name: "A Propos", href: "#Apropos" },
  { name: "Options", href: "#options" },
  /* { name: "Nous contacter", href: "#" }, */
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='absolute inset-x-0 top-0 z-50'>
      <nav
        className='flex items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Camel Studio</span>

            {!mobileMenuOpen && (
              <svg
                width='50'
                height='50'
                className='-mt-2'
                viewBox='0 0 184 189'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_620_372)'>
                  <path
                    d='M82.6517 1.42765C69.864 -1.08983 56.6461 -0.305584 44.2453 3.70638C24.8064 10.1643 2.16263 26.6214 0.212325 68.09C-3.25794 141.816 36.1648 180.573 92.4902 188.453C135.067 194.41 163.781 150.206 175.254 128.294C181.146 117.157 184.151 104.718 183.994 92.117C183.509 63.4459 168.488 17.6842 82.6517 1.42765Z'
                    fill='#1E67FE'
                  />
                  <path
                    d='M126.22 66.5683C127.782 64.1592 128.595 61.3411 128.558 58.4698C128.558 56.628 128.193 54.8045 127.483 53.1052C126.772 51.406 125.732 49.8649 124.422 48.5714C121.663 45.6919 117.707 43.4123 112.551 41.7326C106.485 39.9247 100.174 39.0746 93.8455 39.213C83.954 39.1113 74.1911 41.4608 65.4276 46.0519C56.9073 50.4973 49.8502 57.3087 45.1034 65.6685C40.9799 72.6435 38.5445 80.9458 37.7974 90.5754C43.3768 85.3031 51.0558 80.8346 61.0994 80.8347C64.8189 80.8153 68.4775 81.7789 71.7054 83.6282C72.1048 82.2904 72.5913 80.9803 73.1616 79.706C75.1827 75.0805 78.5725 71.1862 82.874 68.548C87.6197 65.7959 93.0392 64.4246 98.5218 64.5886C102.758 64.5102 106.971 65.2433 110.932 66.7483C112.037 67.1904 113.113 67.6607 114.16 68.1593C118.365 70.1596 123.591 70.4128 126.22 66.5683Z'
                    fill='white'
                  />
                  <path
                    d='M61.0993 91.6243C52.9249 91.6242 46.7933 96.105 42.2155 101.615C40.7922 103.378 39.7952 105.446 39.3022 107.658C38.8093 109.869 38.8336 112.165 39.3734 114.366C49.6854 158.425 98.3323 158.987 119.138 150.981C138.389 143.572 128.432 117.124 119.138 117.124C109.844 117.124 103.212 120.602 95.6102 120.602C76.4271 120.602 76.1827 91.6244 61.0993 91.6243Z'
                    fill='#FFB800'
                  />
                  <path
                    d='M95.6101 120.602C76.4271 120.602 76.1827 91.6242 61.0992 91.6241C58.2515 91.6164 55.4319 92.1879 52.8117 93.3039C52.7535 93.3294 52.6985 93.3532 52.65 93.3738C52.6057 93.393 52.5632 93.4153 52.519 93.4348C57.9364 106.616 73.0786 136.475 105.033 119.255C101.953 120.06 98.7919 120.512 95.6101 120.602Z'
                    fill='white'
                    fillOpacity='0.2'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_620_372'>
                    <rect width='184' height='189' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            )}
          </Link>
          <div
            className={cn(
              `${ThrashTalkFont.variable} font-thrashtalk mx-5  text-3xl  title `
            )}
          >
            Camel <span className='text-csyellow text-3xl'>Studio</span>
          </div>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${Roboto_slab.variable} font-roboto_slab   leading-6 text-white'`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end' />
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-50' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-csblue-light px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10'>
          <div className='flex items-center justify-between'>
            <Link href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <svg
                width='50'
                height='50'
                viewBox='0 0 184 190'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M44.2453 4.20638C56.6461 0.194416 69.864 -0.589831 82.6517 1.92765C168.488 18.1842 183.509 63.9459 183.994 92.617C184.151 105.218 181.146 117.657 175.254 128.794C163.781 150.706 135.067 194.91 92.4902 188.953C36.1648 181.073 -3.25794 142.316 0.212325 68.59C2.16263 27.1214 24.8064 10.6643 44.2453 4.20638ZM126.22 67.068C127.782 64.659 128.596 61.8409 128.558 58.9695C128.559 57.1277 128.193 55.3042 127.483 53.605C126.773 51.9057 125.733 50.3646 124.422 49.0712C121.664 46.1917 117.707 43.912 112.552 42.2324C106.485 40.4244 100.174 39.5743 93.846 39.7128C83.9545 39.6111 74.1916 41.9606 65.4281 46.5516C56.9078 50.9971 49.8507 57.8085 45.1039 66.1682C40.9803 73.1433 38.545 81.4456 37.7979 91.0752C43.3773 85.8029 51.0563 81.3344 61.0999 81.3345C64.8194 81.315 68.478 82.2786 71.7059 84.1279C72.1053 82.7902 72.5918 81.48 73.1621 80.2058C75.1832 75.5803 78.573 71.686 82.8745 69.0478C87.6202 66.2957 93.0396 64.9244 98.5223 65.0884C102.759 65.01 106.971 65.743 110.933 67.2481C112.037 67.6902 113.113 68.1605 114.161 68.659C118.365 70.6594 123.592 70.9126 126.22 67.068ZM57.9235 92.3569C51.3105 93.3428 46.1805 97.3429 42.2159 102.115C40.7926 103.878 39.7956 105.946 39.3026 108.157C38.8097 110.369 38.834 112.665 39.3738 114.865C49.6858 158.925 98.3327 159.487 119.139 151.48C138.389 144.071 128.432 117.623 119.139 117.623C114.258 117.623 110.112 118.582 106.174 119.493L106.168 119.495C105.787 119.583 105.408 119.671 105.03 119.757L105.033 119.755L105.001 119.764C103.449 120.118 101.922 120.449 100.386 120.693C98.8046 120.92 97.2102 121.057 95.6105 121.102C85.4432 121.102 80.5961 112.961 76.0399 105.31C71.9999 98.5247 68.1886 92.1241 61.0997 92.124C60.034 92.1211 58.9723 92.1994 57.9235 92.3569Z'
                  fill='white'
                />
              </svg>
            </Link>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-400'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/25'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
