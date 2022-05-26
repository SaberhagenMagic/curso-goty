import { Component, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

// Services
import { FirebaseService } from '../../common/services/firebase.service';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css'],
  providers: [FirebaseService]
})
export class GraficoBarraHorizontalComponent implements OnDestroy {
  resultados: any[] = [
    { name: 'Batman', value: 10 },
    { name: 'FIFA', value: 20 },
    { name: 'KOF', value: 30 },
    { name: 'Mortal Kombat', value: 25 },
  ];

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

  constructor(private fireService: FirebaseService) {
    
    this.intervalo = setInterval(() => {
      console.log('Tick');
      
      const newResult = [... this.resultados];

      for (let i = 0; i < this.resultados.length; i++) {
        newResult[i].value = Math.floor(Math.random() * 100) + 1;
      }

      this.resultados = [... newResult];
    }, 1500);

    // Recuperar los resultados de la base de datos
    this.fireService.getGames().subscribe( (games: any[]) => {
      console.log('Games:', games);
      // this.resultados = games;
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

  onSelect(event: any) {
    console.log(event);
  }
  

}
