import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  grafica: any = {};

  constructor(private activatedRoute: ActivatedRoute,) {
    console.log("grafica detalle");
    
    this.activatedRoute.params.subscribe(parametros => {
      this.grafica = parametros;
      console.log(this.grafica);
    });
    
  }

  ngOnInit(): void {
  }

}
