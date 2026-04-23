import "./footer.css";
import fb from "../../imagens/fb.png";
import tw from "../../imagens/tw.png";
import ig from "../../imagens/ig.png";
import logo from "../../imagens/logo.png";
export default function Footer() {
  return (
    <footer className="rodape">
      <div>
        <img src={fb} alt="ícone do facebook" />
        <img src={tw} alt="ícone do twitter" />
        <img src={ig} alt="ícone do instagram" />
      </div>
      <img src={logo} alt="logo do Organo" />
      <p>desenvolvido por Alura, adaptado por Bianca</p>
    </footer>
  );
}
