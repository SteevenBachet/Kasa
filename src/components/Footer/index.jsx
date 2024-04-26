import '../../styles/components/footer/footer.css';
import logo from '../../assets/LOGO2.png';

function Footer() {
  return (
    <footer className="footer">
      <img
        className="footer__logo"
        src={logo}
        alt="logo de l'entreprise Kasa"
      />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
