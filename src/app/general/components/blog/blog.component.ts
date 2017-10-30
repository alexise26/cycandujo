import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import {BlogService} from '../../../services/blog.service';
import {Post} from '../../../interfaces/post';
import {HomeComponent} from '../home/home.component';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles: []
})
export class BlogComponent implements OnInit {

  list:Post[];
  listAux:Post[];
  msg:string;
  loading:boolean=true;
  results:boolean = true;

  constructor(private _bs:BlogService) {
    this.msg="Cargando...";
    setTimeout(()=>{
      this.loadPosts();
      this.loading= false;
    },2000);
   }

  ngOnInit() {
  }

  loadPosts(){
    this.list= this._bs.posts;
      if (this._bs.route == '/home') {
        this.list = this.list.slice(0,3).reverse();
      }
  }

  filterResults(value:string){
    this.loadPosts();
    this.list= this._bs.posts;
    console.log(this.list);
    for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].title.includes(value.toLowerCase()) == false) {
            this.list.splice(i,1);
        }
    }
    if (this.list.length == 0) {
        this.msg = "No se encontraron resultados";
        this.results = false;
    }
  }

}
