import { Component, OnInit } from '@angular/core';
import { Habitacion } from 'src/app/modelos/habitacionesmodelo';
import { HabitacionesService } from 'src/app/servicios/habitaciones.service';

@Component({
  selector: 'app-detalles2',
  templateUrl: './detalles2.component.html',
  styleUrls: ['./detalles2.component.scss'],
  providers: [HabitacionesService]
})
export class Detalles2Component implements OnInit {
  public habitacion: any;
  IdHabitacionModel: Habitacion;

  constructor(private _HabitacionesServices: HabitacionesService) { 
    this.IdHabitacionModel = new Habitacion("","","","",0,0,"","",0,[{textoComentario: "", calificacionhabitacion: 0, calificacionservicio: 0,idUsuarioComentario: ""}],0,0,0,0);
  }

  ngOnInit(): void {
    this.VerHabitacion();
  }

  VerHabitacion(){
    this._HabitacionesServices.VerHabitacionPorIdp().subscribe(
      Response => {
        this.habitacion = Response.HabitacionEncontrada;
        console.log(Response)
      }, error => {
        console.log(<any>error)
      }
    )
  }

  EliminarHabitacion(){
      this._HabitacionesServices.EliminarUnaHabitacion().subscribe(
        response => {
          console.log(response)
        }, error => {
          console.log(<any>error)
        }
      )
  }

  EditarHabitas(){
    this._HabitacionesServices.EditarUnaHabitacion(this.IdHabitacionModel).subscribe(
      response => {
        console.log(response)
        this.VerHabitacion();
      }, error => {
        console.log(<any>error)
      }
    )
  }
}
