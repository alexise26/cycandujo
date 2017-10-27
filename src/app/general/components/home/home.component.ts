import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  aboutTitle:string;
  aboutP:string;
  aboutActive:number;

  constructor() {
    this.aboutShow(1);
  }

  ngOnInit() {
  }

  aboutShow(about:number){
    this.aboutActive=about;
    switch(about) {
       case 1: {
          this.aboutTitle ="Acerca de nosotros";
          this.aboutP=`Somos un equipo de profesionales, compartiendo nuestra experiencia en Consultoría de negocios para desarrollar las áreas de: <b>Mercadotecnia</b>, <b>Ventas</b>, <b>Productividad</b>, <b>Recursos Humanos</b>, <b>Finanzas</b>, <b>Desarrollo de Software</b> y <b>Administración de proyectos</b>.<br><br>Nos apasiona apoyar a las pequeñas y medianas empresas porque sus resultados se reflejan en nuevos empleos aprovechamiento de recursos y mejor calidad de vida.`;
          break;
       }
       case 2: {
         this.aboutTitle ="Misión";
         this.aboutP="Somos una solución para posicionar tu empresa y desarrollar tu capital humano, a través de estrategias, tecnología y un equipo de profesionales.";
          break;
       }
       case 3: {
         this.aboutTitle ="Visión";
         this.aboutP="Construir junto contigo el éxito de tu empresa y el de tu gente, a través de acciones oportunas que generen el cambio sustentable en tu beneficio.";
          break;
       }
       case 4: {
         this.aboutTitle ="Valores";
         this.aboutP="<b>Disciplina.</b> Hacer nuestro deber para lograr un proyecto exitoso y sustentable. <br><b>Orden.</b> Adaptar nuestra metodología a cada proyecto para desarrollar el plan de acción y ejecutarlo de manera clara y precisa. <br><b>Respeto.</b> Cuidar la información vital y confidencial del proyecto y utilizarla sólo en el sentido correcto. <br><b>Amor.</b> Entregarnos en el proyecto con plena satisfacción de hacer lo que nos gusta y de compartir la motivación de cerrar un éxito más. <br><b>Calidad.</b> Realizar el proyecto a la entera satisfacción de quien nos elige y distinguirnos por nuestro valor agregado: el servicio. <br>";
          break;
       }
       default: {
          break;
       }
     }
  }
}
