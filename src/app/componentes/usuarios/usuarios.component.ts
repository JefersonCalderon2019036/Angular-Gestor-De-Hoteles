import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuariomodelo';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers:[UsuarioService]
})
export class UsuariosComponent implements OnInit {

  public usuarios: any;
  public token: any;
  public idUsuarioModel: Usuario;
  public usernull: any;
  constructor(private _UsuarioService: UsuarioService) { 
    this.token = this._UsuarioService.getToken();
    this.idUsuarioModel = new Usuario("","","","","","","")
  }

  ngOnInit(): void {
    this.VerTodosLosUsuairos();
  }

  //funcion para obtener todos los usuarios
  VerTodosLosUsuairos(){
    this._UsuarioService.VerTodosLosUsuarios(this.token).subscribe(
      response => {
        this.usuarios = response.usuariosEncontrados;
      }, error  =>{
        console.log(<any>error)
      }
    )
  }

  //funcion para obtener la informacion solo un usuario
  obtenerUsuarioId(idUsuario: string){
    this._UsuarioService.obtenerUsuarioId(idUsuario).subscribe(
      response=>{
        this.idUsuarioModel = response.usuarioEncontrado;
        this.token = this.idUsuarioModel._id;
        localStorage.setItem('SoloUnUsuario',this.token)
      }, error => {
        console.log(<any>error)
      }
    )
  }

  //funcion para editar el perfil de un usuarios
  EditarPerfil(){
    this._UsuarioService.EditarUsuarioid(this.idUsuarioModel).subscribe(
      response => {
        this.usernull = response.usuarioActualizado;
        this.VerTodosLosUsuairos();
      }, error => {
        console.log(<any>error)
      }
    )
  }

  EliminarPerfil(){
    this._UsuarioService.EliminarUsuariosAdmin().subscribe(
      response => {
        console.log(response)
      }, error => {
        console.log(<any>error)
      }
    )
  }
}
