import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { Menu, LightMode, DarkMode } from "@mui/icons-material";
import { ToggleButton } from "@mui/material";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/theme.context";
type Props = {};

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const toggleOpenMenu = () => {
    setOpen((prevState) => !prevState);
  };

  const menuStyles =open?"menu open":"menu";
  const links = [
    { href: "/", label: "Home" },
    { href: "./companies", label: "Companies" },
    { href: "./jobs", label: "Jobs" },
    { href: "./candidates", label: "Candidates" },
  ];
  return (
    <div className="navbar">
      <div className="brand">Resume Management</div>
      <div className={menuStyles}>
        <ul>
          {links.map((item) => (
            <li key={item.href}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hamburger">
        <Menu onClick={toggleOpenMenu} />
      </div>

      <div className="toggle">
        <ToggleButton
          value={"check"}
          selected={darkMode}
          onChange={toggleDarkMode}
        >
          {darkMode ? <LightMode /> : <DarkMode />}
        </ToggleButton>
      </div>
    </div>
  );
};

export default Navbar;
