import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {BlogService} from '../../../services/blog.service';
import {Post} from '../../../interfaces/post';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: []
})
export class PostComponent implements OnInit {
  id:string;
  post:Post;

  constructor(private _bs:BlogService, private router:Router, private route:ActivatedRoute) {
    scroll(0,0);
    this.route.params.subscribe(parametros=>{
        this.id= parametros['post'];
        this.post = this._bs.getPost(this.id)
      });
  }

  ngOnInit() {

  }

}
