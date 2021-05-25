import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { HistorialComponent } from './componentes/historial/historial.component';
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
  {path: "detalles", component: DetallesComponent},
  {path: "historial", component: HistorialComponent},
  {path: "contactanos", component: ContactanosComponent},
  {path: "**", component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
