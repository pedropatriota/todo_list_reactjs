import React from "react";

// import { Container } from './styles';

export default function TechBtn(props) {
  return (
    <button type="button" onClick={props.onDelete}>
      Remover
    </button>
  );
}
