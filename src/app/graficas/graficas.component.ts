import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./graficas.component.css',]
})
export class GraficasComponent implements OnInit {
  graficas = [];
  gPaginas = [];

  constructor(private http: HttpClient,
    private _router:Router,
    private route: ActivatedRoute) {
    //const GRAFICAS = 
    this.http.get('http://localhost:3000/graphicCards').subscribe((resp:any) => {
      this.graficas = resp
      console.log("resp", resp);
    });
  console.log("prueba", this.graficas);
  //this.gPaginas = this.graficas.fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
 }

  ngOnInit(): void {
  }
  
  goToDetails(indice){
    console.log("grafica", indice);
    this._router.navigate(['grafica',indice])
  }

  buscarGrafica(texto){

  }

  
  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }

}
