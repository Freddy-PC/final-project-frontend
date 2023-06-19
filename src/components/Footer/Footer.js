import "./Footer.css";
import "../App/App.css";

function Footer() {
  const today = new Date();

  return (
    <footer className="footer app__section">
      <p className="footer__text">Developed by Freddy Perez-Camacho</p>
      <p className="footer__text">{today.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
