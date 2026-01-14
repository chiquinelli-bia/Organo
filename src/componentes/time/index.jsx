import { Colaborador } from "../colaborador";
import "./time.css";
import hexToRgba from "hex-to-rgba";

const Time = (props) => {
  return (
    props.colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: hexToRgba(props.cor, "0.4") }}
      >
        <input
          onChange={(evento) => props.mudarCor(evento.target.value, props.nome)}
          value={props.cor}
          type="color"
          className="input-cor"
        />
        <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>

        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => {
            console.log(
              <Colaborador
                corDeFundo={props.cor}
                key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                aoDeletar={props.aoDeletar}
              />
            );
            return (
              <Colaborador
                corDeFundo={props.cor}
                key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                aoDeletar={props.aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};
export default Time;
