import { NavLink } from "react-router-dom";
import logo from "../assets/unfccc-lwm-ccs-1c-b-7.5.jpg";

const navItems = [
  { label: "Case Studies", href: "/case-studies" },
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
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
