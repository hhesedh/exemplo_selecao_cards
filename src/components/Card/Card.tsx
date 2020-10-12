import React from "react";
import styled from "styled-components";
import { CardInterface } from "../../mock/Cards";
import "./Card.css";

interface CardProps {
  card: CardInterface;
  onCardClick: (card: CardInterface) => void;
  isCardSelected: boolean;
}

interface CardContainerProps {
  isCardSelected: boolean;
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const CardContainer = styled.div<CardContainerProps>`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  margin: 5%;
  text-align: center;
  opacity: ${({ isCardSelected }) => (isCardSelected ? 1 : 0.5)};
`;

const Card: React.FC<CardProps> = (props) => {
  const { isCardSelected, card, onCardClick } = props;

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

  // Forma que provavelmente será utilizado icone
  //<Icon size={18} name={isCardSelected ? "checked" : "close"} />

  return (
    <CardContainer
      isCardSelected={isCardSelected}
      // Verificação condicional se o card que foi passado como prop está selecionado
      // Caso não esteja selecionado, ele adiciona a classe que coloca opacidade no card
      // Evento de click que seleciona o card
      onClick={(event) => {
        event.preventDefault();
        onCardClick(card);
      }}
    >
      {/* verficicação condicional do icone que deve ser mostrado */}
      {isCardSelected ? checkedIcon : closeIcon}
      <Title>{card.title}</Title>
      <p>{card.subtitle}</p>
      {isCardSelected ? (
        <button className="botao">botão card selecionado</button>
      ) : null}
    </CardContainer>
  );
};

export default Card;
