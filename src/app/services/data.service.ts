import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  


  constructor( private http: HttpClient ) { }

getUsers (correo:string,contrasena:string) {
  console.log(this.http.get('http://localhost:8080/Control-de-Asistencia/resources/MyRest/loginDocente1?usr='+correo+'&passw='+contrasena)._isScalar);

  return this.http.get('http://localhost:8080/Control-de-Asistencia/resources/MyRest/loginDocente1?usr='+correo+'&passw='+contrasena);
}

getMenuOpts() {
  return this.http.get<Componente[]>('/assets/data/menu.json');
}
}
