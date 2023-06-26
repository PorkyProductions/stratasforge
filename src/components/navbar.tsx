
'use client';
import Image from 'next/image';
import { useState } from 'react';
import HorizontalLogo from '../../public/hotizontal.png'
import Link from 'next/link';
interface NavigationLinks {
  name: string;
  href: string;
}
export default () => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleNavbar() {
    setShowMenu(!showMenu);
  }

  const navigation: NavigationLinks[] = [
    {
      name: 'About',
      href: '/about',
    },
    {
      "name": "Contact",
      "href": "/contact"
    },
    {
      "name": "Products",
      'href': "/products"
    }
  ]

  return (
    <div className="rounded-b-lg">
      <div className="text-theme-primary dark:text-theme-grey hover:text-theme-secondary rounded-b-lg">
        <nav className="container p-6 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Link className="text-xl font-bold" href="/">
              <Image src={HorizontalLogo} alt="a planet looking object with a hamer and wrench with the text 'stratasforge printing'" width={150} />
            </Link>
            <div
              onClick={toggleNavbar}
              className="flex md:hidden"
            >
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 ${
              showMenu ? 'flex' : 'hidden'
            }`}
          >
            {navigation.map((link) => (
              <Link
                key={link.name}
                className="dark:text-teal-400 text-deepTeal"
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
            <div className="space-y-2">
              <Link
                href="/contact"
                className="py-3 px-4 text-center text-white bg-deepTeal rounded-md shadow block lg:inline"
              >
                Start a comission
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
