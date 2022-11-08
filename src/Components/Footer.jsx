import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer footer-center p-5 bg-base-200 text-base-content rounded bg-[#2FCB75]">
      <div>
        <div>
          <p>
            Copyright © 2022 - All right reserved by{" "}
            <span className="text-green-900">La Burbuja</span>
          </p>
        </div>

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
          <Link to="/contact" className="text-green-900 text-sm">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
