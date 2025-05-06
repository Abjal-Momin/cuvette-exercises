import linkedin from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
import github from "./assets/github.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <p class="footerCopyRight">© 2025 Abjal Momin</p>
        <div className="linksSection">
          <p className="connectText">What to Connect..?</p>
          <div className="links">
            <a
              className="SocitialLinks"
              href="https://www.linkedin.com/in/abjalmomin/"
              target="_blank"
            >
              <img
                className="SocitialLinksImg"
                src={linkedin}
                alt="LinkedIn png"
              />
            </a>
            <a
              className="SocitialLinks"
              href="https://x.com/AbjalMomin"
              target="_blank"
            >
              <img
                className="SocitialLinksImg"
                src={twitter}
                alt="Twitter png"
              />
            </a>
            <a
              className="SocitialLinks"
              href="https://github.com/Abjal-Momin"
              target="_blank"
            >
              <img className="SocitialLinksImg" src={github} alt="github png" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
