import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habitacion } from '../modelos/habitacionesmodelo';
import { GLOBALSERVICIOS } from './globalservicios';


@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {
  public url: String;
  public Encabezado = new HttpHeaders().set('Content-Type','application/json')

  constructor(public _http: HttpClient) { 
    this.url = GLOBALSERVICIOS.url;
  }

  //funcion para ver todas las habitaciones
  VerTodasLasHabitaciones(token: string): Observable<any>{
    let EncabezadoToken = this.Encabezado.set('Authorization',token)
    return this._http.get(this.url+"VerTodasLasHabitaciones",{headers: EncabezadoToken})
  }

  //funcion para registrar una nueva habitaciones
  RegistraUnaHabitacion(hotel: Habitacion, token: string, identidad: string): Observable<any>{
    let params = JSON.stringify(hotel);
    let EncabezadoToken = this.Encabezado.set('Authorization',token)
    return this._http.post(this.url+"AgregarUnHabitacion/"+identidad, params,{headers: EncabezadoToken})
  }
}
