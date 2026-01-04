import { useState } from "react";
import { Botao } from "./botao";
import { CampoText } from "./campoText";
import { Dropdown } from "./dropdown";
import "./form.css";

export function Form({ aoColaboradorCadastrado }) {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("enviado =>", nome, cargo, imagem, time);
    aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
  };
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
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
    </section>
  );
}
