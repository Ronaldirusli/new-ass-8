import React, { useState } from "react";
import type { NavItem } from "../../types";
import Button from "../ui/Button";

interface NavbarProps {
  navItems: NavItem[];
  onClick?: () => void;
  currentTheme: "light" | "dark";
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  navItems,
  currentTheme,
  onToggleTheme,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDarkMode = currentTheme === "dark";

  return (
    <nav className="bg-white dark:bg-black dark:border-gray-900 dark:text-gray-300 backdrop-blur-md font-quicksand border-b border-gray-200 fixed w-full top-0 left-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-5 h-5 bg-orange-500 rounded-sm transform rotate-12 flex items-center justify-center shadow-lg shadow-orange-500">
              <div className="w-1.5 h-1.5 bg-black rounded-sm" />
            </div>
            <span className="text-gray-950 dark:text-white font-bold text-lg md:text-xl">
              Your <span className="text-gray-400 font-medium">Logo</span>
            </span>
          </div>
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item: NavItem, index: number) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-400 hover:text-white font-medium text-xs tracking-wider transition-color-duration-200 relative"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <button
              type="button"
              onClick={onToggleTheme}
              className="p-2 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:bg-gray-900 transition-colors text-xs cursor-pointer"
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? "Light" : "Dark"}
            </button>
            <Button label="Let's Talk" />
          </div>
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="p-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200 text-xs cursor-pointer"
              quicksand-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? "Light" : "Dark"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden absolute w-full left-0 bg-black border-b border-gray-900 transition-all duration-300 ease-in-out origin-top ${isOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible pointer-events-none"}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 px-2 text-base text-gray-400 hover:text-white hover:bg-gray-900 rounded-xl transition-all"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 px-2">
            <Button label="Let's Talk" className="w-full rounded-full" />
          </div>
        </div>
      </div>
    </nav>
  );
};
