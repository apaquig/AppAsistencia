import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule' },
  { path: 'action-shet', loadChildren: './pages/action-shet/action-shet.module#ActionShetPageModule' },
  { path: 'avatar', loadChildren: './pages/avatar/avatar.module#AvatarPageModule' },
  { path: 'estudiantes', loadChildren: './pages/estudiantes/estudiantes.module#EstudiantesPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'encuesta', loadChildren: './pages/encuesta/encuesta.module#EncuestaPageModule' },
  { path: 'ayuda', loadChildren: './pages/ayuda/ayuda.module#AyudaPageModule' },
  { path: 'cursos', loadChildren: './pages/cursos/cursos.module#CursosPageModule' },
  { path: 'asistencia', loadChildren: './pages/asistencia/asistencia.module#AsistenciaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
