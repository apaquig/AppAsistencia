import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { EstudiantesPage } from './estudiantes.page';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: EstudiantesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EstudiantesPage]
})
export class EstudiantesPageModule {}
