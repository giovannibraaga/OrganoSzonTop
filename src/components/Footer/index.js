import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-organa">
      <ul className="footerSocials">
        <li>
          <a href="https://facebook.com" target="_blank"><img src="../img/fb.png" alt="Facebook Logo" /></a>
        </li>
        <li>
          <a href="https://x.com" target="_blank"><img src="../img/tw.png" alt="Twitter Logo" /></a>
        </li>
        <li>
          <a href="https://instagram.com" target="_blank"><img src="../img/ig.png" alt="Instagram Logo" /></a>
        </li>
      </ul>
      <img className="footer-logo" src="../img/logo.png" alt="Logo Organo"/>
      <h5>Desenvolvido por Alura</h5>
    </footer>
  );
};

export default Footer;
