import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/common/services/game.service';
// Interfaces
import { Game } from '../../common/interfaces/game.interface';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {
  listGames: Game[] = [];

  constructor(private gameSrv: GameService) {
    this.gameSrv.getNominations().subscribe(games => {
      // console.log(games);
      this.listGames = games;
    });
  }

  ngOnInit(): void {
  }

  votarJuego(game: Game) {
    // console.log(game);
    game.votos = game.votos + 1;
    this.gameSrv.votarJuego(game);
  }

}
