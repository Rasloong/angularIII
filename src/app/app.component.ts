import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularIII';
  cap:string='iRoN mAN';
  cap2:string='iRoN mAN tONy STarK';
  nombre: string = 'Capitán América';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  pc: number = 0.23454;
  salary: number = 123456.7;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: '1407 Graymalkin Lane',
      barrio: 'Salem Center',
      condado: 'Condado de Westchester',
      ciudad: 'Nueva York',
    },
  };
  idioma: string = 'es';
  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });
  fecha: Date = new Date();
  videoUrl:string='https://www.youtube.com/embed/XEEasR7hVhA';
  ban:boolean=true;
}
