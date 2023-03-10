import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/auth.interface';
import { map, tap } from "rxjs/operators";
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _auth  : Usuario | undefined;

  get auth(){
    return {...this._auth!}
  }

  constructor(private http: HttpClient) { }

  verificaAutenticacion(): Observable<boolean>{
    if( !localStorage.getItem('token') ){
      return of(false); 
    }
    return this.http.get<Usuario>(`${this.baseUrl}/usuarios/1`)
                .pipe(
                  map(auth => {
                    this._auth = auth
                    return true
                  })
                )
  }

  login(){
    return this.http.get<Usuario>(`${this.baseUrl}/usuarios/1`)
                .pipe(
                  tap(auth => this._auth = auth),
                  tap(auth => localStorage.setItem('token',auth.id.toString())),
                );
  }
  logout(){
    this._auth = undefined;
  }

}
