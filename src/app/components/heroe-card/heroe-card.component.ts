import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {
  //Input sirve para decirle a angular que el valor de una variable puede ser asignado desde fuera del componente, donde es llamado por su selector.

  @Input() public item:any={};
  @Input() public index:number;
  //Outpout sirve para mandar datos desde el hijo al padre
  @Output() public heroeSeleccionado:EventEmitter<number>;

  constructor(private _router:Router) { 
    this.heroeSeleccionado=new EventEmitter();
  }

  ngOnInit(): void {
  }

  public verHeroe(){
    this._router.navigate(['/heroe',this.index]);
    //Cuando se le de click se va ejecutar heroeSeleccionado como un evento, lo que va a hacer es emitir el index
    // this.heroeSeleccionado.emit(this.index);
  }


}
