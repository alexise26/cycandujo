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

  posts:Post[];
  loading:boolean=true;
  isHome:boolean = false;
  isBlog:boolean = false;
  isPost:boolean = true;

  constructor(private _bs:BlogService) {
    if (this._bs.route == '/home') {
          this.isHome=true;
          this.isPost=false;
    }
    if (this._bs.route == '/blog') {
          this.isBlog=true;
          this.isPost=false;
    }

    setTimeout(()=>{
      this.loadPosts();
      this.loading= false;
    },2000);

   }

  ngOnInit() {
  }

  loadPosts(){
    this.posts= this._bs.posts;
      if (!this.isBlog) {
        this.posts = this.posts.slice(0,3).reverse();
      }
  }

}
