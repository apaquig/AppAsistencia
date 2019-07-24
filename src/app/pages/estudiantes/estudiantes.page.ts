import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
})
export class EstudiantesPage implements OnInit {

  usuarios: Observable<any>;

  constructor( private dataService: DataService) { }

  ngOnInit() {
  this.usuarios = this.dataService.getUsers();
  }

}
