import banner from "../../imagens/img";
import "./banner.css";

export default function Banner() {
  return (
    <header className="banner">
      <img src={banner} alt="O banner principal da página do Organo" />
    </header>
  );
}
