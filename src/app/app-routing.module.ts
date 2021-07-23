import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GraficaComponent } from './grafica/grafica.component';
import { GraficasComponent } from './graficas/graficas.component';

const routes: Routes = [
  { path: '', component: GraficasComponent },
  { path: 'grafica', component: GraficaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
