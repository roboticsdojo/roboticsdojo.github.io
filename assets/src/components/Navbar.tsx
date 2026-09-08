import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const burgers = Array.from(document.querySelectorAll<HTMLElement>(".navbar-burger"));
    burgers.forEach((burger) => {
      burger.addEventListener("click", () => {
        const targetId = burger.dataset.target;
        if (!targetId) return;
        const menu = document.getElementById(targetId);
        burger.classList.toggle("is-active");
        menu?.classList.toggle("is-active");
      });
    });
  }, []);

  return (
    <nav className="navbar container" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="image/logo/logo2.webp" alt="Robotics Dojo" />
        </a>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" href="about.html">About</a>
          <div className="navbar-item has-dropdown is-hoverable" style={{ padding: "0" }}>
            <a className="navbar-link">Competition</a>
            <div className="navbar-dropdown">
              <a className="navbar-item" href="competition2026.html">2026</a>
              <a className="navbar-item" href="competition2025.html">2025</a>
              <a className="navbar-item" href="competition2024.html">2024</a>
              <a className="navbar-item" href="competition2023.html">2023</a>
              <a className="navbar-item" href="competition2022.html">2022</a>
            </div>
          </div>
          <a className="navbar-item" href="training.html">Training</a>
          <a className="navbar-item" href="research.html">Research</a>
          <a className="navbar-item" href="team.html">Team</a>
          <a
            className="navbar-item"
            href="https://roboticsdojo.substack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
