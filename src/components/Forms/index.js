import { useState } from "react";
import Botao from "../Botao";
import ListaSuspensa from "../ListaSuspensa";
import TextComponent from "../TextComponent";
import "./Forms.css";

const Forms = (props) => {

  const [nome, setName] = useState("");
  const [cargo, setRole] = useState("");
  const [imagem, setImg] = useState("");
  const [time, setTeam] = useState("");

  const whenSaved = (evento) => {
    evento.preventDefault()
    props.aoColabCadastrado({
      nome,
      cargo,
      imagem,
      time
  })
   setName('')
   setRole('')
   setImg('')
   setTeam('')
  };

  return (
    <section className="Forms">
      <form onSubmit={whenSaved}>
        <h2>Preencha os dados para criar um card de membro.</h2>

        <TextComponent
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setName(valor)}
        />
        <TextComponent
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setRole(valor)}
        />
        <TextComponent
          label="Imagem"
          placeholder="Informe a url da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImg(valor)}
        />

        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          items={props.times}
          valor={time}
          aoAlterado={(valor) => setTeam(valor)}
        />

        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Forms;
