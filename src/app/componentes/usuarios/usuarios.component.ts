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
}
