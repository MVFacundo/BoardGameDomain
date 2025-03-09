import { IBoardgameType } from "../models/boardgame-type.model";
import { IBoardgame } from "../models/boardgame.model";

const boardgameTypes: IBoardgameType[] = [
    { id: 1, name: "Strategy" },
    { id: 2, name: "Family" },
    { id: 3, name: "Party" }
];

export const boardgames: IBoardgame[] = [
    {
        id: 1,
        name: "Catan",
        type: [boardgameTypes[0], boardgameTypes[1]],
        image: "catan.jpg",
        favorite: true,
        description: "A game of trading and building.",
        difficulty: 3,
        players: 3,
        duration: 90,
        rules: "catan-rules.pdf",
        bggLink: "https://boardgamegeek.com/boardgame/13/catan"
    },
    {
        id: 2,
        name: "Dixit",
        type: [boardgameTypes[1], boardgameTypes[2]],
        image: "dixit.jpg",
        favorite: false,
        description: "A game of storytelling and imagination.",
        difficulty: 1,
        players: 6,
        duration: 30,
        rules: "dixit-rules.pdf",
        bggLink: "https://boardgamegeek.com/boardgame/39856/dixit"
    },
    {
        id: 3,
        name: "Pandemic",
        type: [boardgameTypes[0]],
        image: "pandemic.jpg",
        favorite: true,
        description: "A cooperative game of saving the world.",
        difficulty: 4,
        players: 4,
        duration: 45,
        rules: "pandemic-rules.pdf",
        bggLink: "https://boardgamegeek.com/boardgame/30549/pandemic"
    },
    {
        id: 4,
        name: "Ticket to Ride",
        type: [boardgameTypes[1]],
        image: "ticket-to-ride.jpg",
        favorite: false,
        description: "A game of building train routes.",
        difficulty: 2,
        players: 5,
        duration: 60,
        rules: "ticket-to-ride-rules.pdf",
        bggLink: "https://boardgamegeek.com/boardgame/9209/ticket-ride"
    },
    {
        id: 5,
        name: "Carcassonne",
        type: [boardgameTypes[1]],
        image: "carcassonne.jpg",
        favorite: true,
        description: "A tile-placement game.",
        difficulty: 2,
        players: 5,
        duration: 35,
        rules: "carcassonne-rules.pdf",
        bggLink: "https://boardgamegeek.com/boardgame/822/carcassonne"
    },
    {
        id: 6,
        name: "Codenames",
        type: [boardgameTypes[2]],
        image: "codenames.jpg",
        favorite: false,
        description: "A game of word association.",
        difficulty: 1,
        players: 8,
        duration: 15,
        rules: "codenames-rules.pdf",
        bggLink: "https://boardgamegeek.com/boardgame/178900/codenames"
    },
    {
        id: 7,
        name: "7 Wonders",
        type: [boardgameTypes[0], boardgameTypes[1]],
        image: "7-wonders.jpg",
        favorite: true,
        description: "A game of building civilizations.",
        difficulty: 3,
        players: 7,
        duration: 30,
        rules: "7-wonders-rules.pdf",
        bggLink: "https://boardgamegeek.com/boardgame/68448/7-wonders"
    },
    {
        id: 8,
        name: "Azul",
        type: [boardgameTypes[1]],
        image: "azul.jpg",
        favorite: false,
        description: "A game of tile drafting and pattern building.",
        difficulty: 2,
        players: 4,
        duration: 45,
        rules: "azul-rules.pdf",
        bggLink: "https://boardgamegeek.com/boardgame/230802/azul"
    },
    {
        id: 9,
        name: "Splendor",
        type: [boardgameTypes[1]],
        image: "splendor.jpg",
        favorite: true,
        description: "A game of chip-collecting and card development.",
        difficulty: 2,
        players: 4,
        duration: 30,
        rules: "splendor-rules.pdf",
        bggLink: "https://boardgamegeek.com/boardgame/148228/splendor"
    },
    {
        id: 10,
        name: "Terraforming Mars",
        type: [boardgameTypes[0]],
        image: "terraforming-mars.jpg",
        favorite: true,
        description: "A game of transforming the Martian landscape.",
        difficulty: 4,
        players: 5,
        duration: 120,
        rules: "terraforming-mars-rules.pdf",
        bggLink: "https://boardgamegeek.com/boardgame/167791/terraforming-mars"
    },
    {
        id: 11,
        name: "The Resistance",
        type: [boardgameTypes[2]],
        image: "the-resistance.jpg",
        favorite: false,
        description: "A game of social deduction.",
        difficulty: 1,
        players: 10,
        duration: 30,
        rules: "the-resistance-rules.pdf",
        bggLink: "https://boardgamegeek.com/boardgame/41114/resistance"
    }
];