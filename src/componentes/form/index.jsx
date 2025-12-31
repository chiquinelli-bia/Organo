import { Botao } from "./botao";
import { CampoText } from "./campoText";
import { Dropdown } from "./dropdown";
import "./form.css";

export function Form() {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    " Inovação e Gestão",
  ];
  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("enviado");
  };
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <CampoText
          required={true}
          label="Nome"
          placeholder="Digite seu nome."
        />
        <CampoText
          required={true}
          label="Email"
          placeholder="Digite seu Email."
        />
        <CampoText
          label="Imagem"
          placeholder="Digite o endereço da sua imagem."
        />
        <Dropdown required={true} label="Time" itens={times} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
}
