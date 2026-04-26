import "./colaborador.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface ColaboradorProps {
  aoFavoritar: (id: string) => void;
  aoDeletar: (id: string) => void;
  id: string;
  cor: string;
  nome: string;
  imagem: string;
  cargo: string;
  data: string;
  favorito: boolean;
}

export const Colaborador = ({
  id,
  cor,
  nome,
  imagem,
  aoDeletar,
  cargo,
  data,
  aoFavoritar,
  favorito,
}: ColaboradorProps) => {
  function favoritar() {
    aoFavoritar(id);
  }
  const propsfavorito = {
    size: 25,
    onClick: favoritar,
  };
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(id)}
      />
      <div className="cabecalho" style={{ backgroundColor: cor }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <h5>{new Date(data).toLocaleDateString()}</h5>
        <div className="favoritar">
          {favorito ? (
            <AiFillHeart {...propsfavorito} color="red" />
          ) : (
            <AiOutlineHeart {...propsfavorito} />
          )}
        </div>
      </div>
    </div>
  );
};
