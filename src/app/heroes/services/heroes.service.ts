import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes():Observable<Heroe[]> {
   return this.http.get<Heroe[]>(`${ this.baseUrl }/heroes`)
  }

  getHeroesPorId(id: string):Observable<Heroe> {
   return this.http.get<Heroe>(`${ this.baseUrl }/heroes/${ id }`)
  }

  getSugerencias( termino: string ): Observable<Heroe[]> {
    let params: HttpParams = new HttpParams()
    .set('q',termino)
    .set('_limit', 5);
    return this.http.get<Heroe[]>(`${ this.baseUrl }/heroes`,{params});
  }

  agregarHeroe( heroe: Heroe ): Observable<Heroe>{
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, heroe)
  }

  actualizarHeroe( heroe: Heroe ): Observable<Heroe>{
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe)
  }

  deleteHeroe( id: string ): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/heroes/${ id }`)
  }
}
