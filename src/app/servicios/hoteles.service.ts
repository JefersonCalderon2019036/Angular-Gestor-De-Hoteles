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

  //ver solo un hoteles
  VerSoloUnHotel(token: string, id: string): Observable<any>{
    let EncabezadoToken = this.Encabezado.set('Authorization',token)
    return this._http.get(this.url+"VerSoloUnHotel/"+id,{headers: EncabezadoToken})
  }

  VerElHotel(): Observable<any>{
    let EncabezadoToken = this.Encabezado.set('Authorization',this.getToken())
    return this._http.get(this.url+"VerSoloUnHotel/"+this.getHotel(),{headers: EncabezadoToken})
  }

  VerElHotel2(id: string): Observable<any>{
    let EncabezadoToken = this.Encabezado.set('Authorization',this.getToken())
    return this._http.get(this.url+"VerSoloUnHotel/"+id,{headers: EncabezadoToken})
  }
  
  //editar el hotel 
  EditarHotel(hotel: Hoteles): Observable<any>{
    let params = JSON.stringify(hotel);
    let EncabezadoToken = this.Encabezado.set('Authorization',this.getToken())
    return this._http.put(this.url+"EditarHotel/"+this.getUsuario()+"/"+this.getHotel(), params,{headers: EncabezadoToken})
  }

  //eliminar el hotel
  EliminarHotel(): Observable<any>{
    let EncabezadoToken = this.Encabezado.set('Authorization',this.getToken())
    return this._http.delete(this.url+"EliminarUnHotel/"+this.getUsuario()+"/"+this.getHotel(), {headers: EncabezadoToken})
  }

  //obtenemos el token
  getToken(){
    var token2 = localStorage.getItem('token');
    if(token2 != 'undefined'){
      this.token = token2;
    }else{
      this.token = null;
    }
    return this.token;
  }

  //obtenemos el id del usuario registrado
  getUsuario(){
    var token2 = localStorage.getItem('Identidad');
    if(token2 != 'undefined'){
      this.token = token2;
    }else{
      this.token = null;
    }
    return this.token;
  }

  //obtenemos el id de hotel
  getHotel(){
    var token2 = localStorage.getItem('hotel');
    if(token2 != 'undefined'){
      this.token = token2;
    }else{
      this.token = null;
    }
    return this.token;
  }
}