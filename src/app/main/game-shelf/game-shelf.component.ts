import { Component, OnInit } from '@angular/core';
import { IBoardgame } from '../../shared/models/boardgame.model';
import { boardgames } from '../../shared/services/mock';
import { GameCardComponent } from "../game-card/game-card.component";

@Component({
  selector: 'game-shelf',
  standalone: true,
  templateUrl: './game-shelf.component.html',
  styleUrls: ['./game-shelf.component.css'],
  imports: [GameCardComponent]
})
export class GameShelfComponent implements OnInit {
  boardgames?: IBoardgame[];

  ngOnInit(): void {
    this.boardgames = boardgames;
  }
}
