import {Link} from "react-router-dom";
import Container from "../ui/container";
import {footerItems} from "./footerItems";
import {FaFacebook, FaGithub, FaLinkedin, FaYoutube} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary-50 dark:bg-secondary-900">
      <Container>
        <div className="grid grid-cols-2 gap-8 py-6 lg:py-8 md:grid-cols-4">
          {Object.entries(footerItems).map(([category, items]) => (
            <div key={category}>
              <h2 className="mb-6 text-sm font-semibold text-secondary-900 uppercase dark:text-secondary-50">
                {category}
              </h2>
              <ul className="text-secondary-500 dark:text-secondary-400 font-medium">
                {items.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link to={item.url} className="hover:underline">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="px-4 py-6 bg-secondary-100 dark:bg-secondary-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-secondary-500 dark:text-secondary-300 sm:text-center">
            © 2023 <a href="https://sheikmostafizur.com/">SheikMostafizur</a>.
            All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
            <a
              href="#"
              className="text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-50">
              <FaFacebook className="w-4 h-4" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-50">
              <FaYoutube className="w-4 h-4" />
              <span className="sr-only">Discord community</span>
            </a>
            <a
              href="#"
              className="text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-50">
              <FaLinkedin className="w-4 h-4" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-50">
              <FaGithub className="w-4 h-4" />
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
