import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import LogoImg from "../assets/logo.png";
import LogoDarkImg from "../assets/Logo_dark.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navLinks = [
    { key: 0, href: "/", text: "HOME" },
    { key: 1, href: "/about", text: "ABOUT" },
    { key: 2, href: "/projects", text: "PROJECTS" },
    { key: 3, href: "/contact", text: "CONTACT" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  }, [location.pathname]);
  // Goes top after scrolling and changing route

  const handleNavClick = () => {
    setIsMenuOpen(false);
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${
        isMenuOpen ? "active" : ""
      }`}
    >
      <div className="wrapper">
        <div className="navbar_content">
          <a href="\" className="navbar_logo_link">
            <img
              loading="lazy"
              src={LogoImg}
              alt="logo"
              className="navbar_logo"
            />
            <img
              loading="lazy"
              src={LogoDarkImg}
              alt="logo"
              className="navbar_logo_dark"
            />
          </a>
          {/* Hamburger Menu */}
          <div
            className={`navbar_hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
            {/* 'button' to show/hide the links */}
          </div>

          {/* Navigation Menu */}
          <ul className={`navbar_links ${isMenuOpen ? "active" : ""}`}>
            {navLinks.map((navLink) => (
              <li key={navLink.key}>
                <Link to={navLink.href} onClick={handleNavClick}>
                  {navLink.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className="navbar_empty"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
