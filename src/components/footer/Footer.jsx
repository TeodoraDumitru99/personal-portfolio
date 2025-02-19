import "./footer.css";
import LogoImg from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isScrolledFooter, setIsScrolledFooter] = useState(false);
  const location = useLocation();

  const navLinks = [
    { key: 0, href: "/", text: "HOME" },
    { key: 1, href: "/about", text: "ABOUT" },
    { key: 2, href: "/projects", text: "PROJECTS" },
    { key: 3, href: "/contact", text: "CONTACT" },
  ];

  useEffect(() => {
    const handleScrollFooter = () => {
      if (window.scrollY > 50) {
        setIsScrolledFooter(true);
      } else {
        setIsScrolledFooter(false);
      }
    };

    window.addEventListener("scroll", handleScrollFooter);
    return () => {
      window.removeEventListener("scroll", handleScrollFooter);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  }, [location.pathname]);
  // Goes top after scrolling and changing route

  const handleNavClick = (e, href) => {
    if (location.pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="footer">
      <div className="wrapper">
        <div className="footer_content">
          <a href="\" className="footer_logo_link">
            <img
              loading="lazy"
              src={LogoImg}
              alt="logo"
              className="footer_logo"
            />
          </a>
          <div className="footer_mid">
            <ul className="footer_links">
              {navLinks.map((navLink) => (
                <li key={navLink.key}>
                  <Link
                    to={navLink.href}
                    onClick={(e) => handleNavClick(e, navLink.href)}
                  >
                    {navLink.text}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="footer_credit">
              © {new Date().getFullYear()} Developed by Teodora Dumitru
            </p>
          </div>
          <div className="footer_contact">
            <a
              href="https://www.linkedin.com/in/teodora-dumitru/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer_social footer_linkedin"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 43 43"
                width="50"
                height="50"
                fill="#F2EEF9"
              >
                <path d="M37.5179 0.95459H5.51788C2.75788 0.95459 0.517883 3.19459 0.517883 5.95459V37.9546C0.517883 40.7146 2.75788 42.9546 5.51788 42.9546H37.5179C40.2779 42.9546 42.5179 40.7146 42.5179 37.9546V5.95459C42.5179 3.19459 40.2779 0.95459 37.5179 0.95459ZM13.5179 16.9546V35.9546H7.51788V16.9546H13.5179ZM7.51788 11.4246C7.51788 10.0246 8.71788 8.95459 10.5179 8.95459C12.3179 8.95459 13.4479 10.0246 13.5179 11.4246C13.5179 12.8246 12.3979 13.9546 10.5179 13.9546C8.71788 13.9546 7.51788 12.8246 7.51788 11.4246ZM35.5179 35.9546H29.5179C29.5179 35.9546 29.5179 26.6946 29.5179 25.9546C29.5179 23.9546 28.5179 21.9546 26.0179 21.9146H25.9379C23.5179 21.9146 22.5179 23.9746 22.5179 25.9546C22.5179 26.8646 22.5179 35.9546 22.5179 35.9546H16.5179V16.9546H22.5179V19.5146C22.5179 19.5146 24.4479 16.9546 28.3279 16.9546C32.2979 16.9546 35.5179 19.6846 35.5179 25.2146V35.9546Z" />
              </svg>
            </a>

            <a
              href="https://github.com/TeodoraDumitru99"
              target="_blank"
              rel="noopener noreferrer"
              className="footer_social footer_github"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 43 43"
                width="50"
                height="50"
                fill="#F2EEF9"
              >
                <path d="M19.5657 1.10452C9.88604 2.18762 2.10027 10.2025 1.04814 19.9504C-0.00399284 30.1315 5.67752 39.2296 14.305 42.6955C14.9363 42.9121 15.5676 42.4789 15.5676 41.6124V38.1465C15.5676 38.1465 14.7258 38.3631 13.6737 38.3631C10.7277 38.3631 9.46519 35.7637 9.25476 34.2473C9.04434 33.3808 8.62349 32.731 7.99221 32.0811C7.36093 31.8645 7.1505 31.8645 7.1505 31.6479C7.1505 31.2146 7.78178 31.2146 7.99221 31.2146C9.25477 31.2146 10.3069 32.731 10.7277 33.3808C11.7799 35.1138 13.0424 35.547 13.6737 35.547C14.5154 35.547 15.1467 35.3304 15.5676 35.1138C15.778 33.5975 16.4093 32.0811 17.6718 31.2146C12.832 30.1315 9.25476 27.3155 9.25476 22.5499C9.25476 20.167 10.3069 17.7842 11.7799 16.0513C11.5695 15.618 11.359 14.5349 11.359 13.0186C11.359 12.1521 11.359 10.8524 11.9903 9.55269C11.9903 9.55269 14.9363 9.55269 17.8822 12.3687C18.9344 11.9355 20.4074 11.7189 21.8803 11.7189C23.3533 11.7189 24.8263 11.9355 26.0889 12.3687C28.8244 9.55269 31.9808 9.55269 31.9808 9.55269C32.4017 10.8524 32.4017 12.1521 32.4017 13.0186C32.4017 14.7516 32.1912 15.618 31.9808 16.0513C33.4538 17.7842 34.5059 19.9504 34.5059 22.5499C34.5059 27.3155 30.9287 30.1315 26.0889 31.2146C27.3514 32.2977 28.1931 34.2473 28.1931 36.1969V41.829C28.1931 42.4789 28.8244 43.1287 29.6661 42.9121C37.4519 39.6628 42.923 31.8645 42.923 22.7665C42.923 9.76931 32.1912 -0.411813 19.5657 1.10452Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
