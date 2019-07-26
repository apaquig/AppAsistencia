import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo:string;
  contrasena:string;
  constructor(public dataservice: DataService,public router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log("Correo: "+this.correo);
    console.log("Contrasena: "+this.contrasena);
    this.dataservice.getUsers(this.correo,this.contrasena);
    if(this.dataservice.getUsers(this.correo,this.contrasena)._isScalar==false){
      this.router.navigateByUrl('/estudiantes');

    }

    }

    
  }


