import { Injectable } from '@angular/core';
import { GLOBALSERVICIOS } from './globalservicios';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hoteles } from '../modelos/hotelesmodelo';

@Injectable({
  providedIn: 'root'
})
export class HotelesService {
  public url: String;
  public token: any;
  public identidad: any;
  public Encabezado = new HttpHeaders().set('Content-Type','application/json')

  constructor(public _http: HttpClient) { 
    this.url = GLOBALSERVICIOS.url;
  }

  // ver todos los hoteles
  VerTodosLosHoteles(token: string): Observable<any>{
    let EncabezadoToken = this.Encabezado.set('Authorization',token)
    return this._http.get(this.url+"VerTodosLosHoteles",{headers: EncabezadoToken})
  }

  //agregar un nuevo hoteles
  AgregarUnNuevoHotel(hotel: Hoteles, token: string, identidad: string): Observable<any>{
    let params = JSON.stringify(hotel);
    let EncabezadoToken = this.Encabezado.set('Authorization',token)
    return this._http.post(this.url+"RegistrarHotel/"+identidad, params,{headers: EncabezadoToken})
  }
}
