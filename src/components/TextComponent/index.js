import { useState } from "react";
import "./TextComponent.css";

const TextComponent = (props) => {
  const placeholderModified = `${props.placeholder}...`;

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderModified}
      />
    </div>
  );
};

export default TextComponent;
