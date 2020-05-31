import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/servicios/heroes.service'; //Importamos el servicio
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[]=[]; //Heroe es la interface definida en el servicio
  constructor( private _heroesService:HeroesService, private _router:Router) { }

  ngOnInit(): void {
    this.heroes=this._heroesService.getHeroes();
    //console.log(this.heroes);
  }

  public verHeroe(idHeroe:number){
    //console.log(idHeroe);
    //this._router.navigate(['/heroe',idHeroe]);
  }

}
