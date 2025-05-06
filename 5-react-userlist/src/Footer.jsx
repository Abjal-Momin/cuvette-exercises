import React from "react";
import linkedin from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
import github from "./assets/github.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <p class="footerCopyRight">© 2025 Abjal Momin</p>
        <div className="linksSection">
          <p>What to Connect..?</p>
          <div className="links">
            <a className="SocitialLinks" href="#">
              <img
                className="SocitialLinksImg"
                src={linkedin}
                alt="LinkedIn png"
              />
            </a>
            <a className="SocitialLinks" href="#">
              <img
                className="SocitialLinksImg"
                src={twitter}
                alt="Twitter png"
              />
            </a>
            <a className="SocitialLinks" href="#">
              <img className="SocitialLinksImg" src={github} alt="github png" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
