import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticadoComponent } from './pages/autenticado/autenticado.component';
import { LoginComponent } from './pages/login/component/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full"},
  { path: "login", component: LoginComponent },
  { path: "home", component: AutenticadoComponent, children: [
    { path: "", loadChildren: () => import('./pages/homepage/homepage.module').then(e=>e.HomepageModule) },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
