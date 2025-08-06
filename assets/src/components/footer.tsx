import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <a
              target="_blank"
              href="https://x.com/roboticsdojo"
              style={{ padding: "10px" }}
            >
              <i className="fab fa-x-twitter fa-2x"></i>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/robotics_dojo_/"
              style={{ padding: "10px" }}
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/robotics-dojo"
              style={{ padding: "10px" }}
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61577115726328"
              style={{ padding: "10px" }}
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/@roboticsdojo"
              style={{ padding: "10px" }}
            >
              <i className="fab fa-youtube fa-2x"></i>
            </a>
            <a
              target="_blank"
              href="http://github.com/roboticsdojo"
              style={{ padding: "10px" }}
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
          </p>
        </div>
        <div className="columns">
          <div className="column is-3 is-offset-2">
            <h2>
              <strong>Robotics Dojo</strong>
            </h2>
            <ul>
              <li>
                is an intensive robotics program that will spearhead the
                robotics research in Jomo Kenyatta University of Agriculture and
                Technology (JKUAT) and Pan African University Institute for
                Basic Sciences Technology and Innovation (PAUSTI)
              </li>
            </ul>
          </div>
          <div className="column is-3">
            <h2>
              <strong>Contact</strong>
            </h2>
            <ul>
              <li>Email: roboticsdojo@jkuat.ac.ke</li>
            </ul>
          </div>
          <div className="column is-3">
            <h2>
              <strong>Links</strong>
            </h2>
            <ul>
              <li>
                <a href="http://www.jkuat.ac.ke">
                  Jomo Kenyatta University of Agriculture and Technology (JKUAT)
                </a>
              </li>
              <li>
                <a href="https://jkuat.ac.ke/project/africaai/">
                  AFRICA-ai-JAPAN Project (JICA)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
