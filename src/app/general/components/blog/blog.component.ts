import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import {BlogService} from '../../../services/blog.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles: []
})
export class BlogComponent implements OnInit {
  @Input('posts') posts;
  constructor(private _bs:BlogService) {
    if (this.posts == null) {
        this.posts= this._bs.posts;
    }

   }

  ngOnInit() {
  }

}
