// import { CiDark } from "react-icons/ci";

import React, { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// import { Dropdown } from 'bootstrap';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Pricing', href: '#', current: false },
  { name: 'Team', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
  { name: 'Blong', href: '#', current: false }, 
  // { name: 'pages', href: '#', current: false },
  // {Dropdown: "drop" ,href: '#', current: false},

];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Navebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className=" relative">
      <Disclosure as="nav" className="bg-[rgb(55,88,249)]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-between sm:items-stretch">
                <div className="container flex items-center w-full">
                  {/* Logo */}
                  <img alt="Your Company" src="./public/images/logo-A.svg" className="h-16 w-auto" />

                  {/* Navigation Items */}
                  <ul className="hidden lg:flex lg:ml-20 lg:pt-3  lg:gap-4  flex-1  justify-center lg:mr-24 lg:mb-8 w-[30rem] xl:gap-10 xl:ml-8 xl:mt-5">
                    
                    {navigation.map((item) => (
                      <li  key={item.name}>
                        <a className="no-underline text-white text-lg hover:text-[(rgb(138,91,244)]"  href={item.href}>
                          {item.name}
                        </a>
                      </li>
                      
                    ))}
                    <li>
                    
                        <button
                          type="button"
                          onClick={toggleDropdown}
                          className="inline-flex w-full justify-center rounded-md   py-1 text-sm font-semibold text-white  items-center"
                          id="menu-button"
                          aria-expanded={isOpen}
                          aria-haspopup="true"
                        >
                          Pages
                          <svg
                            className="-mr-1 h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      
                    </li>
                    </ul>
                    {/* Dropdown Menu */}
                    <div className="relative inline-block text-left lg:mr-32  ">
                      

                      {isOpen && (
                        <div
                          className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md ml-24 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="menu-button"
                          tabIndex="-1"
                        >
                          <div className="py-2" role="none">
                          
                          <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-500 no-underline hover:text-[rgb(138,91,244)]" role="menuitem"
                  >
                    About page
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-500 no-underline hover:text-[rgb(138,91,244)]" role="menuitem"
                  >
                    Pricing page
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-500 no-underline hover:text-[rgb(138,91,244)]" role="menuitem"
                  >
                    Contact page
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-500 no-underline hover:text-[rgb(138,91,244)]" role="menuitem"
                  >
                    Blong Gride page
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-500 no-underline hover:text-[rgb(138,91,244)]" role="menuitem"
                  >
                    Blong Details
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-500 no-underline hover:text-[rgb(138,91,244)]" role="menuitem"
                  >
                    Sign Up page
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-500 no-underline hover:text-[rgb(138,91,244)]" role="menuitem"
                  >
                    Sign In page
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-500 no-underline hover:text-[rgb(138,91,244)]" role="menuitem"
                  >
                    404 page
                  </a>
                          </div>
                        </div>
                      )}
                    </div>
                  
                </div>
            </div>

            {/* Additional Items */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 space-x-4">
              {/* Download Button */}
             

              {/* Profile Dropdown */}
              <Menu as="div" className="relative ml-3 mt-2">
                <div>
                  <MenuButton className="hidden md:flex relative w- flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white ">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    {/* <CiDark className="text-white w-8 h-7  "/>  */}
                  </MenuButton>
               

                </div>
              </Menu>
              <button className='p-2 text-white'>Sign In</button>
              <button className="hidden md:inline-block relative focus:outline-none text-white pr-8 py-2 px-4 text-center pl-9 bg-[rgb(95,121,250)] rounded ">
                Sign Up
              </button>

              {/* Mobile Menu Button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 lg:hidden text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <DisclosurePanel className="lg:hidden">
          <div className="container float-right w-32 h-96 border">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current
                    ? 'bg-gray-900 text-white no-underline'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white no-underline',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}

export default Navebar;