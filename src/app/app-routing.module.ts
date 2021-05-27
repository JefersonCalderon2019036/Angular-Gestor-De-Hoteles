import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { Detalles2Component } from './componentes/detalles2/detalles2.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { HotelesComponent } from './componentes/hoteles/hoteles.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path: "login", component: LoginComponent},
  {path: "perfil", component: PerfilComponent},
  {path: "principal", component: PrincipalComponent},
  {path: "registrar", component: RegistrarComponent},
  {path: "usuarios", component: UsuariosComponent},
  {path: "hoteles", component: HotelesComponent},
  {path: "detalles", component: DetallesComponent},
  {path: "detalles2", component: Detalles2Component},
  {path: "historial", component: HistorialComponent},
  {path: "contactanos", component: ContactanosComponent},
  {path: "**", component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
