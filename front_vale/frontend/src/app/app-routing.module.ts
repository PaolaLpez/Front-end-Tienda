import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ClienteComponent } from './cliente/cliente.component';

const routes: Routes = [
  { path: '', component: HomeComponent },          // Ruta principal
  { path: 'admin', component: AdminComponent }, 
  { path: 'login', component: LoginComponent},   
  { path: 'empleado', component: EmpleadoComponent},
  { path: 'cliente', component: ClienteComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
