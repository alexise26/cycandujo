import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import {Router   } from '@angular/router';
import {Post} from '../interfaces/post';

@Injectable()
export class BlogService {
  public route:string;
  public posts:Post[]=[{
    date: new Date('09-27-2017'),
    title: 'facebook ads y marketing digital',
    text:'en el mes de agosto llevamos a cabo el curso presencial <b>“facebook ads y marketing digital”</b> dirigido a emprendedores y pymes de la ciudad de chihuahua. algunos de los giros que estuvieron presentes fueron: pastelería, cerveza artesanal, lentes y relojes, bienes raíces, restaurantes, ropa y calzado, publicidad y estética.<br>luego de dos días del curso, los participantes aprendieron a preparar su negocio para comunicarlo a través de marketing digital, también hicieron sus propuestas de contenido audio visual (flyeres, videos, tutoriales, memes y gif); posteriormente nos adentramos en los anuncios de facebook ads y terminamos con la integración de otras redes sociales con enfoque de ventas, así como google para empresas y el desarrollo de su propia landing page. estamos preparando el siguiente curso presencial de <b>“facebook ads y marketing digital”</b>, espérenlo pronto. ',
    postedBy:'CyC Andujo',
    key$:'facebook-ads'
  },
  {
    date: new Date('10-01-2017'),
    title: 'facebook y contenido audiovisual',
    text:'el sábado 9 de septiembre estuvimos con las candidatas a doctoras en ciencias de la salud y medio ambiente, del centro de desarrollo de estudios superiores, compartiendo el curso <b>“buenas prácticas de facebook y contenido audiovisual”</b>. gracias a las participantes por su atención y les deseamos que sus proyectos tomen con excelente camino con el aprendizaje del curso.',
    postedBy:'CyC Andujo',
    key$:'facebook-y-contenido'
  },
  {
    date: new Date('10-06-2017'),
    title: 'photoshop & illustrator',
    text:'estamos próximos a iniciar el curso básico de <b>“photoshop & illustrator”</b>, donde iniciaremos desde las bases, para quienes nunca han manejado estos programas. el objetivo del curso es realizar tareas de: fotografía, fotomontajes, edición y crear diseños desde cero, con sus respectivas técnicas. todavía quedan algunos lugares, contáctanos para que seas parte de este curso de 20 horas, serán cuatro sábados de aprendizaje intenso. ',
    postedBy:'CyC Andujo',
    key$:'photoshop-illustrator'
  }
  ]

  constructor(private location: Location,private router:Router) {
    router.events.subscribe((val) => {
        this.route = location.path();
    });
  }

  getPost(key$:string):any  {
    return  this.posts.filter(item => item.key$ == key$)[0];
  }

}
