import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/modelos/habitacionesmodelo';
import { Hoteles } from 'src/app/modelos/hotelesmodelo';
import { Usuario } from 'src/app/modelos/usuariomodelo';
import { HabitacionesService } from 'src/app/servicios/habitaciones.service';
import { HotelesService } from 'src/app/servicios/hoteles.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
  providers: [HabitacionesService, UsuarioService, HotelesService, HabitacionesService]
})
export class PrincipalComponent implements OnInit {

  public usuarios: any;
  public hoteles: any;
  public token: any;
  public identidad: any;
  public idUsuarioModel: Usuario;
  public idhotelesModel: Hoteles;
  public idhabitacionesModel: Habitacion;
  public habitaciones: any;
  
  constructor(private _UsuarioService: UsuarioService,
    private _HotelesService:  HotelesService,
    private _HabitacionService: HabitacionesService) {
    this.idUsuarioModel = new Usuario("","","","","","","");
    this.idhotelesModel = new Hoteles("","","","","","","","");
    this.idhabitacionesModel = new Habitacion("","","","",0,0,"","",0,[{
                                                  textoComentario: "",
                                                  calificacionhabitacion: 0,
                                                  calificacionservicio: 0,
                                                  idUsuarioComentario: ""
                                              }],0,0,0,0);
    this.token = this._UsuarioService.getToken();
    this.identidad = this._UsuarioService.getUsuario();
   }

  ngOnInit(): void {
    this.VerTodosLosHoteles();
    this.VerTadasLasHabitaciones();
  }

  //metodo para crear un una nueva habitacion
  AgregarUnNuevoHotel(){
    this._HotelesService.AgregarUnNuevoHotel(this.idhotelesModel,this.token,this.identidad).subscribe(
      response => {
        this.hoteles = response.hotelguardado;
        this.VerTodosLosHoteles();
      }, error => {
        console.log(<any>error)
      }
    )
  }

  //metod para traer todos los hoteles
  VerTodosLosHoteles(){
    this._HotelesService.VerTodosLosHoteles(this.token).subscribe(
      response => {
        this.hoteles = response.hotelencontrado;
      }, error => {
        console.log(<any>error)
      }
    )
  }

  //metodo para traer todas las habitaciones
  VerTadasLasHabitaciones(){
    this._HabitacionService.VerTodasLasHabitaciones(this.token).subscribe(
      response => {
        this.habitaciones = response.hotelencontrado;
      }, error => {
        console.log(<any>error);
      }
    )
  }
}
