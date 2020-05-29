import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {
  public heroe:any={};
  constructor(private _activatedRoute:ActivatedRoute,
              private _heroeService:HeroesService) {
    this._activatedRoute.params.subscribe(params=>{
      //console.log(params);
      this.heroe=this._heroeService.getHeroe(params['id']);
    });
  }

  ngOnInit(): void {
  }

}
