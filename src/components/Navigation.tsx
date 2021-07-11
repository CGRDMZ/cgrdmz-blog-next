import { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import cx from "classnames";
import Link from "next/link"

export default function Navigation() {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const onNavButtonClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <div className="w-screen bg-gray-800 relative">
        <nav className="w-full container xl:max-w-6xl px-2 flex flex-row items-center justify-between mx-auto">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <div
            className={cx(
              "fixed",
              "top-0",
              "left-0",
              "bg-gray-500",
              "bg-opacity-75",
              "z-20",
              "w-screen",
              "h-screen",
              "flex",
              "flex-col",
              "justify-center",
              "items-center",
              "text-bold",
              "text-2xl",
              "text-white",
              "gap-y-3",
              "text-center",
              { hidden: !navOpen }
            )}
          >
            <button className="text-bold text-3xl w-10 h-10 mr-3 md:mr-5 bg-gray-400 rounded-full" onClick={onNavButtonClick}>X</button>
            <NavItem>About</NavItem>
            <NavItem>Portfolio</NavItem>
            <NavItem>Contact</NavItem>
          </div>
          <ul
            className={cx(
              "text-white",
              "sm:flex",
              "sm:flex-row",
              "hidden"
            )}
          >
            <NavItem>About</NavItem>
            <NavItem>Portfolio</NavItem>
            <NavItem>Contact</NavItem>
          </ul>
          <button
            className="sm:hidden w-10 h-10 relative"
            onClick={onNavButtonClick}
          >
            <div className="block w-5 absolute left-1/2 top-1/2 transform  -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className="block absolute h-0.5 w-5 bg-white transform transition duration-500 ease-in-out -translate-y-1.5"
              ></span>
              <span
                aria-hidden="true"
                className="block absolute  h-0.5 w-5 bg-white transform transition duration-500 ease-in-out"
              ></span>
              <span
                aria-hidden="true"
                className="block absolute  h-0.5 w-5 bg-white transform  transition duration-500 ease-in-out translate-y-1.5"
              ></span>
            </div>
          </button>
        </nav>
      </div>
    </>
  );
}
