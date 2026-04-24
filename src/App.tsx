import { useState } from "react";
import Banner from "./componentes/banner/banner";
import { Form } from "./componentes/form/index";
import Time from "./componentes/time/index";
import Footer from "./componentes/footer/index";
import { v4 as uuidv4 } from "uuid";
import banner from "./imagens/banner.png";
import { IColaborador } from "./compartilhados/interface/colaborador";
import { ITime } from "./compartilhados/interface/time";

function App() {
  const [times, setTimes] = useState<ITime[]>([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#D86EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FEBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);
  const inicial: IColaborador[] = [
    {
      id: uuidv4(),
      favorito: false,
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[0]!.nome,
      data: "2024-03-12",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[0]!.nome,
      data: "2023-11-05",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[0]!.nome,
      data: "2022-08-21",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[1]!.nome,
      data: "2024-01-30",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[1]!.nome,
      data: "2023-06-14",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[1]!.nome,
      data: "2022-12-02",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[1]!.nome,
      data: "2021-09-18",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[2]!.nome,
      data: "2023-04-09",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[2]!.nome,
      data: "2022-07-25",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[2]!.nome,
      data: "2024-02-11",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[2]!.nome,
      data: "2021-11-03",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[3]!.nome,
      data: "2023-09-27",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[3]!.nome,
      data: "2022-05-16",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[3]!.nome,
      data: "2024-04-01",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[3]!.nome,
      data: "2021-03-22",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[4]!.nome,
      data: "2023-12-10",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[4]!.nome,
      data: "2022-10-08",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[4]!.nome,
      data: "2024-01-19",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[4]!.nome,
      data: "2021-06-30",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[5]!.nome,
      data: "2023-08-04",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[5]!.nome,
      data: "2022-02-17",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[5]!.nome,
      data: "2024-03-05",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[5]!.nome,
      data: "2021-12-12",
    },
  ];
  const [colaboradores, setColaboradores] = useState<IColaborador[]>(inicial);

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };
  function deletarColaborador(id: string) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id),
    );
  }
  function mudarCorDoTime(cor: string, id: string) {
    if (!cor) return;
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          return { ...time, cor };
        }
        return time;
      }),
    );
  }
  function cadastrarTime(nome: string, cor: string) {
    setTimes([
      ...times,
      { id: uuidv4(), nome, cor, corSecundaria: cor + "33" },
    ]);
    console.log(cor);
  }
  function aoFavoritar(id: string) {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) {
          return {
            ...colaborador,
            favorito: !colaborador.favorito,
          };
        }
        return colaborador;
      }),
    );
  }

  return (
    <div className="App">
      <Banner
        enderecoImagem={banner}
        textoAlternativo="O banner principal da página do Organo"
      />
      <Form
        categoria={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
        cadastrarTime={cadastrarTime}
      />
      {times.map((time) => (
        <Time
          id={time.id}
          mudarCor={mudarCorDoTime}
          nome={time.nome}
          cor={time.cor}
          key={time.nome}
          aoDeletar={deletarColaborador}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome,
          )}
          favoritar={aoFavoritar}
        />
      ))}
      <Footer></Footer>
    </div>
  );
}

export default App;
