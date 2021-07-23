import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GraficaComponent } from './grafica/grafica.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { GraficasComponent } from './graficas/graficas.component'; 
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { JwPaginationComponent } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    GraficaComponent,
    GraficasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    InfiniteScrollModule,
    // JwPaginationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
