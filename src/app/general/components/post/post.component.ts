import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {BlogService} from '../../../services/blog.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: []
})
export class PostComponent implements OnInit {
  id:string;

  constructor(private _bs:BlogService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parametros=>{
          //console.log(parametros);
        this.id= parametros['id'];//Obtenemos el id del héroe
        if (this.id !== 'nuevo') { //Si es distinto a nuevo
            //this._bs.getHeroe(this.id)
            //  .subscribe(heroe=> this.heroe = heroe)
        }
      });
  }

}
