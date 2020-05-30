import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-resultado-heroes',
  templateUrl: './resultado-heroes.component.html'
})
export class ResultadoHeroesComponent implements OnInit {
  public heroesEncontrados:Heroe[];
  public resultado:boolean;
  constructor(
    private _activatedRoute:ActivatedRoute,
    private _heroesService:HeroesService
  ) {
    this._activatedRoute.params.subscribe(params=>{
      this.heroesEncontrados=this._heroesService.buscarHeroes(params['termino']);
      if(this.heroesEncontrados.length>0)
        this.resultado=true;
      else
        this.resultado=false; 
    });
  }
  
  ngOnInit(): void {
  }

}
