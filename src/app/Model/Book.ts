export class Book {
  id: number;
  name: string;
  genre: string;
  quantity: number;
  cost: number;

  constructor(
    id: number,
    name: string,
    genre: string,
    quantity: number,
    cost: number
  ) {
    this.id = id;
    this.name = name;
    this.genre = genre;
    this.quantity = quantity;
    this.cost = cost;
  }
}
