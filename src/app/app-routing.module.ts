import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { InicioComponent } from './pages/inicio/inicio.component';
import { GotyComponent } from './pages/goty/goty.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'goty', component: GotyComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
