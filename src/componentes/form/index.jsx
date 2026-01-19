import { useState } from "react";
import { Botao } from "./botao";
import { CampoText } from "./campoText";
import { Dropdown } from "./dropdown";
import "./form.css";

export function Form({ aoColaboradorCadastrado, categoria, cadastrarTime }) {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");
  const aoSalvar = (evento) => {
    evento.preventDefault();
    aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });

    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };
  return (
    <section className="formulario">
      <form className="container-form" onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <CampoText
          required={true}
          label="Nome"
          placeholder="Digite seu nome."
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoText
          required={true}
          label="Cargo"
          placeholder="Digite seu Cargo."
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoText
          label="Imagem"
          placeholder="Digite o endereço da sua imagem."
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <Dropdown
          required={true}
          label="Time"
          itens={categoria}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          cadastrarTime({ nome: nomeTime, cor: corTime });
        }}
        className="container-form"
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <CampoText
          obrigatorio
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <CampoText
          obrigatorio
          label="Cor"
          placeholder="Digite a cor do time"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Botao> Criar um novo time</Botao>
      </form>
    </section>
  );
}
