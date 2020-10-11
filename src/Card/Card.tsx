import React from "react";
import { CardInterface } from "../mock/Cards";
import "./Card.css";

interface CardProps {
  card: CardInterface;
  onCardClick: (card: CardInterface) => void;
  isCardSelected: boolean;
}
export const Card = ({ card, onCardClick, isCardSelected }: CardProps) => {
  // Icone que no exemplo abriria o modal apagar o card
  const closeIcon = (
    <i
      className="fa fa-close"
      style={{ position: "relative", top: "5%", left: "30%", color: "red" }}
    ></i>
  );

  // Icone que mostra que o card está selecionado
  const checkedIcon = (
    <i
      className="fa fa-check"
      style={{ position: "relative", top: "5%", left: "30%", color: "green" }}
    ></i>
  );

  return (
    <div
      // Verificação condicional se o card que foi passado como prop está selecionado
      // Caso não esteja selecionado, ele adiciona a classe que coloca opacidade no card
      className={isCardSelected ? "container" : "container cardNotSelected"}
      // Evento de click que seleciona o card
      onClick={(event) => {
        event.preventDefault();
        onCardClick(card);
      }}
    >
      {/* verficicação condicional do icone que deve ser mostrado */}
      {isCardSelected ? checkedIcon : closeIcon}
      <h1>{card.title}</h1>
      <p>{card.subtitle}</p>
    </div>
  );
};
