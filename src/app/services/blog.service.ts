import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import {Router   } from '@angular/router';
import {Post} from '../interfaces/post';

@Injectable()
export class BlogService {
  public route:string;
  public posts:Post[]=[{
    date: new Date('27-09-2017'),
    title: 'facebook ads y marketing digital',
    text:'En el mes de agosto llevamos a cabo el curso presencial <b>“Facebook ADS y Marketing digital”</b> dirigido a emprendedores y PyMES de la ciudad de Chihuahua. Algunos de los giros que estuvieron presentes fueron: pastelería, cerveza artesanal, lentes y relojes, bienes raíces, restaurantes, ropa y calzado, publicidad y estética. Luego de dos días del curso, los participantes aprendieron a preparar su negocio para comunicarlo a través de Marketing digital, también hicieron sus propuestas de contenido audio visual (flyeres, videos, tutoriales, memes y gif); posteriormente nos adentramos en los anuncios de Facebook ADS y terminamos con la integración de otras redes sociales con enfoque de ventas, así como Google para empresas y el desarrollo de su propia landing page. Estamos preparando el siguiente curso presencial de “Facebook ADS y Marketing digital”, espérenlo pronto. ',
    key$:'facebook-ads'
  },
  {
    date: new Date('01-10-2017'),
    title: 'facebook y contenido audiovisual',
    text:'El sábado 9 de septiembre estuvimos con las candidatas a Doctoras en Ciencias de la Salud y Medio Ambiente, del Centro de Desarrollo de Estudios Superiores, compartiendo el curso <b>“Buenas prácticas de Facebook y contenido audiovisual”</b>. Gracias a las participantes por su atención y les deseamos que sus proyectos tomen con excelente camino con el aprendizaje del curso.',
    key$:'facebook-y-contenido'
  },
  {
    date: new Date('06-10-2017'),
    title: 'Photoshop & Illustrator',
    text:'Estamos próximos a iniciar el curso básico de <b>“Photoshop & Illustrator”<b>, donde iniciaremos desde las bases, para quienes nunca han manejado estos programas. El objetivo del curso es realizar tareas de: fotografía, fotomontajes, edición y crear diseños desde cero, con sus respectivas técnicas. Todavía quedan algunos lugares, contáctanos para que seas parte de este curso de 20 horas, serán cuatro sábados de aprendizaje intenso. ',
    key$:'photoshop-&-illustrator'
  }
  ]

  constructor(private location: Location,private router:Router) {
    router.events.subscribe((val) => {
        this.route = location.path();
    });
  }

}
