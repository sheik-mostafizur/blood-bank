import {useState} from "react";
import {Link} from "react-router-dom";
import {MdOutlineDarkMode} from "react-icons/md";
import {IoSettings} from "react-icons/io5";
import Button from "../ui/button";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
  const [toggleItems, setToggleItems] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleDarkMode = () => {
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.add("bg-secondary-800");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("bg-secondary-800");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="bg-secondary-50 border-secondary-200 dark:bg-secondary-900">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 container">
        <Link to="/" className="flex items-center">
          <img
            src="https://apex.oracle.com/pls/apex/r/mamunddd/80728/files/static/v49/mamun_vai_logo.png"
            className="h-8 mr-3"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-secondary-50">
            BloodBank
          </span>
        </Link>
        <div className="flex items-center md:order-2 relative">
          <Button size="sm" className="me-4">
            Create Account
          </Button>
          <button
            type="button"
            onClick={() => setToggleItems(!toggleItems)}
            className="flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-secondary-300 dark:focus:ring-secondary-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <IoSettings className="w-7 h-7 rounded-full text-primary-700" />
          </button>
          {/* Dropdown menu */}
          <div
            className={`z-50 ${
              toggleItems || "hidden"
            } my-4 text-base list-none bg-secondary-50 divide-y divide-secondary-100 rounded-lg shadow dark:bg-secondary-700 dark:divide-secondary-600 absolute top-8 right-0`}
            id="user-dropdown">
            {/* <div className="px-4 py-3">
              <span className="block text-sm text-secondary-900 dark:text-secondary-50">
                Bonnie Green
              </span>
              <span className="block text-sm  text-secondary-500 truncate dark:text-secondary-400">
                name@flowbite.com
              </span>
            </div> */}
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  onClick={handleDarkMode}
                  className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100 dark:hover:bg-secondary-600 dark:text-secondary-200 dark:hover:text-secondary-50 cursor-pointer">
                  <MdOutlineDarkMode className="text-2xl" />
                </a>
              </li>
              {/*
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100 dark:hover:bg-secondary-600 dark:text-secondary-200 dark:hover:text-secondary-50">
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100 dark:hover:bg-secondary-600 dark:text-secondary-200 dark:hover:text-secondary-50">
                  Sign out
                </a>
              </li> */}
            </ul>
          </div>
          <button
            onClick={() => setToggleDropdown(!toggleDropdown)}
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-secondary-500 rounded-lg md:hidden hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-secondary-200 dark:text-secondary-400 dark:hover:bg-secondary-700 dark:focus:ring-secondary-600"
            aria-controls="navbar-user"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            toggleDropdown || "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-secondary-100 rounded-lg bg-secondary-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-secondary-800 md:dark:bg-secondary-900 dark:border-secondary-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-secondary-50 bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:p-0 md:dark:text-primary-500"
                aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-secondary-900 rounded hover:bg-secondary-100 md:hover:bg-transparent md:hover:text-primary-700 md:p-0 dark:text-secondary-50 md:dark:hover:text-primary-500 dark:hover:bg-secondary-700 dark:hover:text-secondary-50 md:dark:hover:bg-transparent dark:border-secondary-700">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
