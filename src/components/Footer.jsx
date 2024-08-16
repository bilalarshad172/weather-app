import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-2xl ml-3 font-bold">Live Weather</h2>
          <p className="mt-2 ml-3">
            Stay updated with the latest weather conditions.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-4 md:mt-0">
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-400 mr-3">
              <FaFacebook size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-400 mr-3">
              <FaTwitter size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400 mr-3">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>&copy; 2024 Live Weather. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
