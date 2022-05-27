import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Game } from 'src/app/common/interfaces/game.interface';
import { FirebaseService } from '../../common/services/firebase.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  resultados: { name: string, value: number }[] = [];

  constructor(private fireService: FirebaseService) {
    // Recuperar los resultados de la base de datos
    this.fireService.getGames()
    .pipe(
      map( (games: Game[]) => games.map( ({name, votos}) => ({ name, value: votos }) ))
    )
    .subscribe( (games: { name: string, value: number }[]) => {
      console.log('Games:', games);
      this.resultados = games;
    });
  }

  ngOnInit(): void {
  }

}
