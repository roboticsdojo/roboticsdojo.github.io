import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="columns">
        <div className="column is-3 is-offset-2">
          <h2>
            <strong>Robotics Dojo</strong>
          </h2>
          <ul>
            <li>
              is an intensive robotics program that will spearhead the robotics
              research in Jomo Kenyatta University of Agriculture and Technology
              (JKUAT) and Pan African University Institute for Basic Sciences
              Technology and Innovation (PAUSTI)
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
              <a href="https://jkuat.ac.ke/projects/africa-ai-japan/">
                AFRICA-ai-JAPAN Project (JICA)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
