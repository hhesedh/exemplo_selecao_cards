import React, { useState } from "react";
import Card from "../Card/Card";
import { CardInterface, cardsMock } from "../../mock/Cards";

export const Cards = () => {
  // Estado com o card Selecionado
  const [selectedCard, setSelectedCard] = useState<CardInterface>(cardsMock[0]);

  return (
    <div>
      {cardsMock.map((item) => {
        // Verifica se o card está selecionado
        const isCardSelected = item.id === selectedCard.id;
        return (
          <Card
            key={item.id}
            card={item}
            onCardClick={(card: CardInterface) => setSelectedCard(card)}
            isCardSelected={isCardSelected}
          />
        );
      })}
    </div>
  );
};
