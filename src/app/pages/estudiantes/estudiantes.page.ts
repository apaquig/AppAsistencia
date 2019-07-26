import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
})
export class EstudiantesPage {

  usuarios: Observable<any>;

  constructor( public dataService: DataService) { }

  // ngOnInit() {
  // this.usuarios = this.dataService.getUsers();
  // }

}
