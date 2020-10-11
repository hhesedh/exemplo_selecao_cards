export interface CardInterface {
  id: number;
  title: string;
  subtitle: string;
}

export const cardsMock: CardInterface[] = [
  { id: 1, title: "Card 1", subtitle: "Subtitle Card 1" },
  { id: 2, title: "Card 2", subtitle: "Subtitle Card 2" },
  { id: 3, title: "Card 3", subtitle: "Subtitle Card 3" },
  { id: 4, title: "Card 4", subtitle: "Subtitle Card 4" },
];
