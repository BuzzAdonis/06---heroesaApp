import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confimar',
  templateUrl: './confimar.component.html',
  styleUrls: ['./confimar.component.css']
})
export class ConfimarComponent {

  constructor( private dialogRef: MatDialogRef<ConfimarComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: Heroe,
              private heroesService:HeroesService,
              private router:Router){}


  borrar(){
    this.dialogRef.close(true);
  }
  cerrar(){
    this.dialogRef.close();
  }

}
