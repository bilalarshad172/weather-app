import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'light' ? 'bg-[#3B4D61]' : 'bg-gradient-primary'} text-white py-10 mt-10 shadow-lg`}>
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4 md:px-6">
        <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl font-bold">
            Live <span className="text-accent-light">Weather</span>
          </h2>
          <p className="mt-3 text-white">
            Stay updated with the latest weather conditions anywhere in the world.
          </p>
          <div className="mt-4 bg-dark-dark/30 p-3 rounded-lg inline-block">
            <p className="text-sm">Powered by accurate weather data</p>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-center mt-4 md:mt-0 mb-6 md:mb-0">
          <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6">
            <li>
              <a href="#" className="hover:text-accent-light transition-colors duration-300 flex items-center">
                <span className="bg-dark-dark/30 w-1 h-1 rounded-full mr-2 md:hidden"></span>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent-light transition-colors duration-300 flex items-center">
                <span className="bg-dark-dark/30 w-1 h-1 rounded-full mr-2 md:hidden"></span>
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent-light transition-colors duration-300 flex items-center">
                <span className="bg-dark-dark/30 w-1 h-1 rounded-full mr-2 md:hidden"></span>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="bg-dark-dark/30 p-3 rounded-full hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="bg-dark-dark/30 p-3 rounded-full hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="bg-dark-dark/30 p-3 rounded-full hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto border-t border-white/10 mt-8 pt-6">
        <div className="text-center">
          <p className="text-white opacity-80">&copy; 2024 Live Weather. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
