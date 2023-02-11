import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  termino: string = '';
  heroes : Heroe[] = [];
  heroeSeleccionado: Heroe | undefined;
  constructor(private heroesService: HeroesService){}

  buscando(){
    if(this.termino.trim().length == 0){ 
      this.heroes = []
      return;
    }
    console.log(this.termino.trim());
    this.heroesService.getSugerencias(this.termino.trim())
        .subscribe( heroes => {
          this.heroes = heroes;
        } );
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){

    if( !event.option.value){ 
      this.heroeSeleccionado = undefined;
      return;
    }
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroesPorId( heroe.id! )
        .subscribe( heroe => this.heroeSeleccionado = heroe);
  }
}
