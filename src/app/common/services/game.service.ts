import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import Swal from 'sweetalert2';
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

  votarJuego(game: Game): void {
    this.fireService.editGame(game)
    .then(() => {
      // console.log('Voto guardado');
      Swal.fire('Gracias', 'Tu voto ha sido contabilizado', 'success');
    })
    .catch((err) => {
      console.error( err.message);
      Swal.fire('Error', 'Error al guardar el voto', 'error');
    });
  }
}
