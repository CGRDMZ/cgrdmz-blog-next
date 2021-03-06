import { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import cx from "classnames";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const onNavButtonClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <header className="w-full bg-gray-800 relative">
        <nav className="w-full max-w-5xl px-2 flex flex-row items-center justify-between mx-auto">
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
              "w-full",
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
            <div
              className="p-3 bg-gray-400 rounded-full cursor-pointer"
              onClick={onNavButtonClick}
            >
              <div className="w-4 h-4">
                <FontAwesomeIcon icon={faX} size="xs"/>
              </div>
            </div>
            <div onClick={onNavButtonClick}>
              <NavItem url="/about">About</NavItem>
            </div>
            <div onClick={onNavButtonClick}>
              <NavItem url="/contact">Contact</NavItem>
            </div>
          </div>
          <div className={cx("text-white", "md:flex", "sm:flex-row", "hidden")}>
            <NavItem url="/about">About</NavItem>
            <NavItem url="/contact">Contact</NavItem>
          </div>
          <button
            className="md:hidden w-10 h-10 relative"
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
      </header>
    </>
  );
}
