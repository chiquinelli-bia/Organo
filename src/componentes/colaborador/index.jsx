import "./colaborador.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export const Colaborador = (props) => {
  function favoritar() {
    props.favoritar(props.colaborador.id);
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
        onClick={() => props.aoDeletar(props.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: props.corDeFundo }}>
        <img src={props.imagem} alt={props.nome} />
      </div>
      <div className="rodape">
        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
        <div className="favoritar">
          {props.colaborador.favorito ? (
            <AiFillHeart {...propsfavorito} color="red" />
          ) : (
            <AiOutlineHeart {...propsfavorito} />
          )}
        </div>
      </div>
    </div>
  );
};
