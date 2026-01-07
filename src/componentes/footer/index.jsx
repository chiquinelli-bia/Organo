import "./footer.css";
import { fb, tw, inst, logo } from "../../imagens/img.js";

export default function Footer() {
  return (
    <footer className="rodape">
      <div>
        <img src={fb} alt="ícone do facebook" />
        <img src={tw} alt="ícone do twitter" />
        <img src={inst} alt="ícone do instagram" />
      </div>
      <img src={logo} alt="logo do Organo" />
      <p>desenvolvido por Alura, adaptado por Bianca</p>
    </footer>
  );
}
