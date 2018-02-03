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
  },
  {
    date: new Date('11-03-2017'),
    title: 'certificaciones',
    text:'<b>¿Quieres impartir y diseñar cursos bajo el estándar oficial en México?</b><br>Maestro, Médico, Abogado, Chef, Arquitecto, Ingeniero, Contador Público, Diseñador Gráfico y demás profesiones, tienes mucho que ofrecer y puede generarte ingresos extra a través de la capacitación en tu campo de trabajo. <br><br><b>¿Qué es un estándar de competencias? </b><br>Es un documento oficial, expedido por el Sistema Nacional de Competencias (red CONOCER), avalado por la SEP, que valida que eres competente al impartir y diseñar cursos de capacitación. <br><br><b>¿En qué consisten estas certificaciones? </b><br>EC0217, Impartición de cursos. Descripción del estándar: preparar y conducir la sesión realizando el encuadre, desarrollo y cierre, empleando técnicas instruccionales y grupales que faciliten el proceso de aprendizaje; evaluar el aprendizaje antes, durante y al final del curso, considerando la satisfacción de los participantes. <br><br>EC0301, Diseño de cursos. Descripción del estándar: elaboración de la carta descriptiva y selección de lastécnicas de instrucción; diseño de instrumentos para la evaluación; elaboración de los reactivos del instrumento de evaluación; diseño del instrumento para la evaluación de satisfacción del curso; desarrollo de manuales del curso de capacitación; elaboración del manual del instructor y selección de las fuentes de información del manual del participante. <br><br><b>¿Cómo mejoran tu desempeño en el ámbito de la capacitación? </b><br>Fortalece tus conocimientos, desempeños, hábitos, valores y competencias para manejar los rubros básicos de un curso de capacitación: motivación de los participantes, manejo de grupos, técnicas asertivas e instruccionales y metodología integral. <br><br><b>Fechas y horarios: </b><br>EC2017: 18 horas de asistencia para alineación y diagnóstico; 1 hora para evaluación. <br>Fechas: 25 nov, 2 de dic, 9 dic. <br>Horario: 8 am a 2 pm. <br>Sede: Av. Américas 303, altos. <br>Evaluación: 16 dic, 17 dic y 23 dic. <br>EC0301: 18 horas de asistencia para alineación y diagnóstico; 1 hora para evaluación. <br>Fechas: 20 ene, 27 ene, 3 feb. <br>Horario: 8 am a 2 pm. <br>Sede: Av. Américas 303, altos. <br>Evaluación: 10 feb, 11 feb, 17 feb. <br><br>Inversión: <br>Una certificación = $5 730 pesos, incluye: material, curso de alineación, diagnóstico de confirmación, evaluación y certificado. <br>Dos certificaciones: $11 460 pesos, incluye: material, curso de alineación, diagnóstico de confirmación, evaluación y certificados. <br><br><b>PROMOCIÓN DE FIN DE AÑO: </b><br><b>Al pagar una certificación + $999 pesos, obtienes la segunda certificación y un Curso de Marketing digital, para que promuevas tus cursos en redes sociales y en Google.</b><br><br>Aparta tu lugar con $1 000 pesos y el resto hasta el 25 de noviembre. <br>Cupo limitado a 18 participantes. <br>',
    postedBy:'CyC Andujo',
    key$:'certificaciones'
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
