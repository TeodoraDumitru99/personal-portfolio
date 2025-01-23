import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { key: 0, href: "/", text: "HOME" },
    { key: 1, href: "/about", text: "ABOUT" },
    { key: 2, href: "/projects", text: "PROJECTS" },
    { key: 3, href: "/contact", text: "CONTACT" },
  ];
  return (
    <nav className="navbar">
      <ul>
        {navLinks.map((navLink) => (
          <li key={navLink.key}>
            <Link to={navLink.href}>{navLink.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
