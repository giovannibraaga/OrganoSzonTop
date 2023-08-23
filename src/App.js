import { useState } from "react";
import Banner from "./components/Banner";
import Forms from "./components/Forms";
import Time from "./components/Time";
import Footer from "./components/Footer"

function App() {
  const times = [
    {
      nome: "sz on top",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Duelista",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Sentinela",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Iniciador",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Controlador",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
  ];

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColabAdc = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Forms
        times={times.map((times) => times.nome)}
        aoColabCadastrado={colaborador => aoNovoColabAdc(colaborador)}/>

      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
