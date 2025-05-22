"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface MenuItem {
  title: string;
  path: string;
  hasDropdown?: boolean;
  dropdownItems?: Array<{
    title: string;
    path: string;
  }>;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const linkRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    { title: "Service", path: "/service" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "About", path: "/about" },
    { title: "Blog", path: "/blog" }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (title: string) => {
    if (window.innerWidth >= 768) {
      setActiveDropdown(activeDropdown === title ? null : title);
    }
  };
  const toggleMobileDropdown = (title: string) => {
    setActiveMobileDropdown(activeMobileDropdown === title ? null : title);
  };

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setActiveMobileDropdown(null);
    setHoveredLink(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdowns = document.querySelectorAll('.relative');
      let clickedOutside = true;
      dropdowns.forEach(dropdown => {
        if (dropdown.contains(event.target as Node)) {
          clickedOutside = false;
        }
      });
      if (clickedOutside) {
        setActiveDropdown(null);
        setActiveMobileDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const navElement = navRef.current;
    if (!navElement) return;

    const mouseX = e.clientX;

    let newHoveredLink: number | null = null;

    for (let i = 0; i < linkRefs.current.length; i++) {
      const link = linkRefs.current[i];
      if (link) {
        const rect = link.getBoundingClientRect();
        const buffer = 4; // tolerance buffer on either side

        if (
          mouseX >= rect.left - buffer &&
          mouseX <= rect.right + buffer
        ) {
          newHoveredLink = i;
          break;
        }
      }
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setHoveredLink(newHoveredLink);
    }, 30); // faster update
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setHoveredLink(null);
    }, 50);
  };

  return (
    <header className="bg-white fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <img className="h-12 w-auto" src="/logo.png" alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div
              className="hidden md:flex md:space-x-8 relative"
              ref={navRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {menuItems.map((item, index) =>
                !item.hasDropdown ? (
                  <div
                    key={item.title}
                    ref={(el) => {
                      linkRefs.current[index] = el;
                    }}
                    className="relative flex items-center"
                  >
                    <Link
                      href={item.path}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-150"
                    >
                      {item.title}
                    </Link>
                  </div>
                ) : (
                  <div
                    key={item.title}
                    ref={(el) => {
                      linkRefs.current[index] = el;
                    }}
                    className="relative"
                    onMouseEnter={() => toggleDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900"
                      type="button"
                    >
                      {item.title}
                      <svg
                        className="ml-1 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {activeDropdown === item.title && (
                      <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.title}
                              href={dropdownItem.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {dropdownItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              )}
              {/* Sliding Dot */}
              {hoveredLink !== null && linkRefs.current[hoveredLink] && (
                <motion.div
                  className="absolute -bottom-2 w-2 h-2 bg-[#3c3f94] rounded-full pointer-events-none"
                  initial={false}
                  animate={{
                    x:
                      linkRefs.current[hoveredLink]!.offsetLeft +
                      linkRefs.current[hoveredLink]!.offsetWidth / 2 -
                      6,
                    opacity: 1,
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </div>
            <div className="hidden md:flex">
              <button className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#3c3f94] hover:bg-[#3c3f94ca]">
                Schedule a Call
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {menuItems.map((item) =>
              !item.hasDropdown ? (
                <Link
                  key={item.title}
                  href={item.path}
                  className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-[#3c3f94] hover:text-[#3c3f94ca]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ) : (
                <div key={item.title} className="space-y-1">
                  <button
                    onClick={() => toggleMobileDropdown(item.title)}
                    className="w-full flex items-center justify-between pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-[#3c3f94] hover:text-[#3c3f94ca]"
                  >
                    {item.title}
                    <svg
                      className={`ml-2 h-5 w-5 transform ${activeMobileDropdown === item.title ? 'rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {activeMobileDropdown === item.title && (
                    <div className="space-y-1">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          href={dropdownItem.path}
                          className="block pl-6 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-[#3c3f94] hover:text-[#3c3f94ca]"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
            <div className="mt-3 px-4">
              <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#3c3f94] hover:bg-[#3c3f94c5]">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
