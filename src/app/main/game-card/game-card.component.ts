import { Component, Input } from '@angular/core';
import { IBoardgame } from '../../shared/models/boardgame.model';

@Component({
  selector: 'game-card',
  standalone: true,
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css'
})
export class GameCardComponent {
  @Input() game?: IBoardgame;
}
