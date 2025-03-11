import { Component } from '@angular/core';
import { GameShelfComponent } from "../game-shelf/game-shelf.component";

@Component({
  selector: 'app-guide',
  standalone: true,
  imports: [GameShelfComponent],
  templateUrl: './guide.component.html',
  styleUrl: './guide.component.css'
})
export class GuideComponent {

}
