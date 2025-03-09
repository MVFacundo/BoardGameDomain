import { IBoardgameType } from "./boardgame-type.model";


export interface IBoardgame {
    id: number;
    name: string;
    type: IBoardgameType[];
    image: string;
  }