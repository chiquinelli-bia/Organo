import { useState } from "react";
import Botao from "./botao";
import { Campo } from "./campo";
import { Dropdown } from "./dropdown";
import "./form.css";
import { IColaborador } from "../../compartilhados/interface/colaborador";

interface FormProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void;
  categoria: string[];
  cadastrarTime: (nome: string, cor: string) => void;
}
export function Form({
  aoColaboradorCadastrado,
  categoria,
  cadastrarTime,
}: FormProps) {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("#ffffff");
  const aoSalvar = (evento: React.SubmitEvent<HTMLFormElement>) => {
    evento.preventDefault();
    aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
      data,
    });

    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
    setData("");
  };
  return (
    <section className="formulario">
      <form className="container-form" onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <Campo
          type="text"
          required={true}
          label="Nome"
          placeholder="Digite seu nome."
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          type="text"
          required={true}
          label="Cargo"
          placeholder="Digite seu Cargo."
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <Campo
          type="text"
          label="Imagem"
          placeholder="Digite o endereço da sua imagem."
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <Campo
          type="date"
          label="Data"
          placeholder="Digite a data."
          valor={data}
          aoAlterado={(valor) => setData(valor)}
        />
        <Dropdown
          required={true}
          label="Time"
          itens={categoria}
          value={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
      <form
        onSubmit={(evento: React.SubmitEvent<HTMLFormElement>) => {
          evento.preventDefault();
          console.log(corTime);
          cadastrarTime(nomeTime, corTime);
          setNomeTime("");
          setCorTime("#000000");
        }}
        className="container-form"
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <Campo
          type="text"
          required={true}
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <Campo
          required={true}
          type="color"
          label="Cor"
          placeholder="Digite a cor do time"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Botao>Criar um novo time</Botao>
      </form>
    </section>
  );
}
