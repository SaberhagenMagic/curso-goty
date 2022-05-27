import { Component, Input, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Game } from 'src/app/common/interfaces/game.interface';

// Services
import { FirebaseService } from '../../common/services/firebase.service';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css'],
  providers: [FirebaseService]
})
export class GraficoBarraHorizontalComponent implements OnDestroy {
  @Input() Juegos: { name: string, value: number }[] = [];
  // resultados: any[] = [
  //   { name: 'Batman', value: 10 },
  //   { name: 'FIFA', value: 20 },
  //   { name: 'KOF', value: 30 },
  //   { name: 'Mortal Kombat', value: 25 },
  // ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  intervalo: any;

  constructor() {
    
    // this.intervalo = setInterval(() => {
    //   console.log('Tick');
      
    //   const newResult = [... this.Juegos];

    //   for (let i = 0; i < this.Juegos.length; i++) {
    //     newResult[i].value = Math.floor(Math.random() * 100) + 1;
    //   }

    //   this.Juegos = [... newResult];
    // }, 1500);

  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

  onSelect(event: any) {
    console.log(event);
  }
  

}
