import Banner from "./componentes/banner/banner.jsx";
import { CampoText } from "./componentes/campoText/index.jsx";

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoText label="Nome" placeholder="Digite seu nome." />
      <CampoText label="Email" placeholder="Digite seu Email." />
      <CampoText
        label="Imagem"
        placeholder="Digite o endereço da sua imagem."
      />
    </div>
  );
}

export default App;
