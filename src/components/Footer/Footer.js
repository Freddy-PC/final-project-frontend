import "./Footer.css";
import "../App/App.css";
import linkedinLogo from "../../images/linkedin-logo.svg";
import gitHubLogo from "../../images/github-logo.svg";

function Footer() {
  const today = new Date();

  return (
    <footer className="footer app__section">
      <p className="footer__text">
        @{today.getFullYear()} Freddy Perez-Camacho
      </p>
      <div className="footer__images">
        <img
          className="image footer__image-lin"
          alt="linkedIn-logo"
          src={linkedinLogo}
        />
        <img
          className="image footer__image-git"
          alt="github-logo"
          src={gitHubLogo}
        />
      </div>
    </footer>
  );
}

export default Footer;
