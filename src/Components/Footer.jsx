import React from "react";
import { Link } from "react-router-dom";
import GoogleMaps from "./GoogleMaps";
import {TfiLocationPin} from "react-icons/tfi";
import {FaWhatsapp} from "react-icons/fa";
import {HiOutlineMailOpen} from "react-icons/hi";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer footer-center p-5 bg-base-200 text-base-content rounded bg-[#2FCB75] flex justify-between">
      <div>
        <img src={logo} alt="logo" />
        {/* <div>
          <p className="text-sm">
            Designed by:
            <a href="https://kiliss.github.io/" className="text-orange-800">
              {" "}
              Kiliss
            </a>
          </p>
        </div> */}
        <div>
          <Link to="/contact" className="text-green-900 text-2x1">
            Contacto
          </Link>
          <span className="text-black text-2x1 flex">
            <TfiLocationPin size={20} className="mr-2"/>Dr zeroli 435 - Urdinarrain
          </span>
          <span className="text-black text-2x1 flex">
            <FaWhatsapp size={20} className="mr-2"/> +54 9 3446 476381
          </span>
          <span className="text-black text-2x1 flex">
            <HiOutlineMailOpen size={20} className="mr-2"/> laburbujaurdi@gmail.com
          </span>
        </div>
        <div>
          <p>
            Copyright © 2022 - All right reserved by{" "}
            <span className="text-green-900">La Burbuja</span>
          </p>
        </div>
      </div>
      <GoogleMaps />
    </footer>
  );
}

export default Footer;
