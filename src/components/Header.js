import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Navigation from "./Navigation";
import NavigationMobile from "./NavigationMobile";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 800 });

  return (
    <div>
      <div id="App-header">
        <Link to="/">
          <img
            alt="site logo"
            id="logo"
            src="/logo.png"
            onClick={() => setIsOpen(false)}
          />
        </Link>
        {!isMobile && <Navigation />}
      </div>
      {isMobile && (
        <div className="hamburger">
          <FontAwesomeIcon
            icon={faBars}
            id="hamburger-icon"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      )}
      {isOpen && <NavigationMobile setIsOpen={setIsOpen} />}
    </div>
  );
}

export default Header;
