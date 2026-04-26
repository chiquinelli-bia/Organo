import { IColaborador } from "../../compartilhados/interface/colaborador";
// @ts-ignore
import { Colaborador } from "../colaborador";
import "./time.css";
import hexToRgba from "hex-to-rgba";

interface TimeProps {
  corSecundaria?: string;
  cor: string;
  nome: string;
  id: string;
  colaboradores: IColaborador[];
  mudarCor: (cor: string, id: string) => void;
  aoDeletar: (id: string) => void;
  favoritar: (id: string) => void;
}
const Time = ({
  corSecundaria,
  nome,
  colaboradores,
  cor,
  id,
  mudarCor,
  aoDeletar,
  favoritar,
}: TimeProps) => {
  return (
    colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: hexToRgba(cor, "0.4") }}
      >
        <input
          onChange={(evento) => mudarCor(evento.target.value, id)}
          value={cor}
          type="color"
          className="input-cor"
        />
        <h3 style={{ borderColor: cor }}>{nome}</h3>

        <div className="colaboradores">
          {colaboradores.map((colaborador) => {
            return (
              <Colaborador
                cor={cor}
                id={colaborador.id}
                key={colaborador.id}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                data={colaborador.data}
                imagem={colaborador.imagem}
                aoDeletar={aoDeletar}
                aoFavoritar={favoritar}
                favorito={colaborador.favorito}
              />
            );
          })}
        </div>
      </section>
    )
  );
};
export default Time;
