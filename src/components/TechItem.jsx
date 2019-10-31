import React from "react";
import TechBtn from "./TechBtn";

// import { Container } from './styles';

export default function TechItem({ tech, onDelete }) {
  console.log({ tech });

  let btn;

  if (!tech) {
    btn = "";
  } else {
    btn = (
      <li>
        {tech}
        <TechBtn key={tech} onDelete={onDelete} />
      </li>
    );
  }

  return btn;
}
