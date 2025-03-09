import { IBoardgameType } from "./boardgame-type.model";

export interface IBoardgame {
    id: number;
    name: string;
    type: IBoardgameType[];
    image: string;
    favorite: boolean;
    description: string;
    difficulty: number;
    players: number;
    duration: number;
    rules: string;
    bggLink: string;
}