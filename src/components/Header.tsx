import { NavLink } from "react-router-dom";
import logo from "../assets/logo-placeholder.svg";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Finance Needs", href: "#" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Resources", href: "#" },
  { label: "Methods", href: "#" },
  { label: "Get Started", href: "#" },
];

export default function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="header-inner">
        <NavLink className="brand-link" to="/case-studies" aria-label="Needs-Based Finance case studies">
          <img src={logo} alt="" className="brand-mark" />
          <span className="brand-text">Needs-Based Finance</span>
        </NavLink>
        <nav className="primary-nav" aria-label="Primary navigation">
          {navItems.map((item) =>
            item.href === "#" ? (
              <a href="#" aria-disabled="true" key={item.label}>
                {item.label}
              </a>
            ) : (
              <NavLink key={item.label} to={item.href}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
