import React, { useState } from "react";
import { Card } from "../Card/Card";
import { CardInterface, cardsMock } from "../../mock/Cards";

export const Cards = () => {
  // Estado para armazenar o array com dados do card
  const [cards, setCards] = useState(cardsMock);
  // Estado com o card Selecionado
  const [cardSelected, setCardSelected] = useState<CardInterface>(cardsMock[0]);

  return (
    <div>
      {cards?.map((item) => {
        // Verifica se o card está selecionado
        const isCardSelected = item.id === cardSelected.id;
        return (
          <Card
            key={item.id}
            card={item}
            onCardClick={(card: CardInterface) => setCardSelected(card)}
            isCardSelected={isCardSelected}
          />
        );
      })}
    </div>
  );
};
