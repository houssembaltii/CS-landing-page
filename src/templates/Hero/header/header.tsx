"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import Link from "next/link";

import { ThrashTalkFont } from "@/utils/fonts";
import { Roboto_slab } from "@/utils/fonts";

import { cn } from "@/utils/utils";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Prestations", href: "#Prestations" },
  { name: "A Propos", href: "#Apropos" },
  { name: "Options", href: "#options" },
  /* { name: "Nous contacter", href: "#" }, */
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
                width='40'
                height='40'
                viewBox='0 0 40 40'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                transform='translate(-4,-3)'
              >
                <g clip-path='url(#clip0_187_8)'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M9.61854 0.885245C12.3144 0.0406211 15.1878 -0.124484 17.9678 0.405512C36.6278 3.82794 39.8933 13.462 39.9987 19.498C40.0328 22.1508 39.3796 24.7696 38.0987 27.1142C35.6046 31.7273 29.3624 41.0334 20.1066 39.7793C7.86191 38.1203 -0.708248 29.961 0.0461575 14.4397C0.470137 5.70946 5.3927 2.24481 9.61854 0.885245ZM27.4391 14.1193C27.7787 13.6121 27.9557 13.0188 27.9474 12.4143C27.9476 12.0266 27.868 11.6427 27.7137 11.285C27.5593 10.9272 27.3333 10.6028 27.0483 10.3305C26.4487 9.72426 25.5885 9.24432 24.4678 8.89072C23.1489 8.51009 21.777 8.33112 20.4013 8.36028C18.251 8.33887 16.1286 8.8335 14.2235 9.80003C12.3713 10.7359 10.8371 12.1699 9.8052 13.9298C8.90876 15.3983 8.37935 17.1461 8.21693 19.1734C9.42985 18.0635 11.0992 17.1227 13.2826 17.1227C14.0912 17.1186 14.8865 17.3215 15.5882 17.7108C15.6751 17.4292 15.7808 17.1534 15.9048 16.8851C16.3442 15.9113 17.0811 15.0915 18.0162 14.5361C19.0479 13.9567 20.226 13.668 21.4179 13.7025C22.3389 13.686 23.2546 13.8403 24.1159 14.1572C24.3559 14.2503 24.5898 14.3493 24.8176 14.4542C25.7315 14.8754 26.8678 14.9287 27.4391 14.1193ZM12.5921 19.4433C11.1545 19.6508 10.0392 20.4929 9.17737 21.4976C8.86796 21.8687 8.65122 22.3041 8.54404 22.7696C8.43689 23.2353 8.44217 23.7186 8.55952 24.1818C10.8013 33.4576 21.3767 33.5759 25.8998 31.8902C30.0846 30.3304 27.92 24.7624 25.8998 24.7624C24.8387 24.7624 23.9374 24.9643 23.0813 25.1561L23.08 25.1565C22.9972 25.1751 22.9148 25.1936 22.8326 25.2117L22.8333 25.2113L22.8263 25.2132C22.4889 25.2877 22.157 25.3574 21.823 25.4087C21.4793 25.4565 21.1327 25.4854 20.7849 25.4948C18.5746 25.4948 17.5209 23.781 16.5304 22.1702C15.6522 20.7417 14.8236 19.3942 13.2825 19.3942C13.0509 19.3936 12.8201 19.4101 12.5921 19.4433Z'
                    fill='white'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_187_8'>
                    <rect width='40' height='40' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            )}
          </Link>
          <div
            className={cn(
              `${ThrashTalkFont.variable} font-thrashtalk mx-1  text-3xl  title `
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
              className={`${Roboto_slab.variable} font-roboto_slab  leading-6 text-white group transition duration-300 `}
            >
              {item.name}
              <span className='block w-0 group-hover:w-1/2 transition-all duration-500 h-0.5 bg-white group-focus:w-full'></span>
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
                width='30'
                height='30'
                viewBox='0 0 184 190'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
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
