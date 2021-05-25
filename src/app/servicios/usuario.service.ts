import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuariomodelo';
import { GLOBALSERVICIOS } from './globalservicios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url: String;
  public token: any;
  public Encabezado = new HttpHeaders().set('Content-Type','application/json')

  constructor(public _http: HttpClient) { 
    this.url = GLOBALSERVICIOS.url;
  }

  //funcion para ver todos los usuarios
  VerTodosLosUsuarios(token: string): Observable<any>{
    let EncabezadoToken = this.Encabezado.set('Authorization',token)
    return this._http.get(this.url+"VerTodosLosUsuarios",{headers: EncabezadoToken})
  }

  //funcion para regitrar un usuario con un rol usuario de forma predeterminada
  RegistrarUsuarios(usuario: Usuario): Observable<any>{
    let params = JSON.stringify(usuario);
    return this._http.post(this.url+"RegistrarUsuarios", params, {headers: this.Encabezado});
  }

  //funcion para logearse
  login(usuario: Usuario): Observable<any>{
    let params = JSON.stringify(usuario);
    return this._http.post(this.url + 'Login', params, {headers: this.Encabezado});
  }

  //funcion para obtener el token desde el localStorage
  getToken(){
    var token2 = localStorage.getItem('token');
    if(token2 != 'undefined'){
      this.token = token2;
    }else{
      this.token = null;
    }
    return this.token;
  }

  //funcion para obtener el id del usuario desde el localstorage
  getUsuario(){
    var token2 = localStorage.getItem('Identidad');
    if(token2 != 'undefined'){
      this.token = token2;
    }else{
      this.token = null;
    }
    return this.token;
  }

  //funcion para obtener el rol del usuario desde el localstorage
  getRol(){
    var token2 = localStorage.getItem('rol');
    if(token2 != 'undefined'){
      this.token = token2;
    }else{
      this.token = null;
    }
    return this.token;
  }
}
