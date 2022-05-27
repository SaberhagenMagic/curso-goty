import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Game } from '../interfaces/game.interface';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games: Game[] = [];

  constructor(private fireService: FirebaseService) { }

  // Recuperar los resultados de la base de datos
  getNominations(): Observable<Game[]> {

    if(this.games.length > 0) {
      // Sin juegos
      console.log('Desde cache');
      return of(this.games);
    } else {
      // Con juegos
      console.log('Desde firebase');
      return this.fireService.getGames()
        .pipe(
          tap( games => this.games = games)
        );
    }
  }

  async votarJuego(game: Game) {
    const response =  await this.fireService.editGame(game);
    console.log(response);
    // return response;
  }
}
