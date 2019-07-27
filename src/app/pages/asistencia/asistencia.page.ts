import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {
  lat:number
  lon:number
  total:string

  constructor(public geolocation: Geolocation) {
    this.getGeolocation()
   }

  

  ngOnInit() {
  }

  getGeolocation(){
      this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
      this.lat = geoposition.coords.latitude;
      this.lon = geoposition.coords.longitude;
      
    });
    
    console.log(this.geolocation.getCurrentPosition());
  }

}
