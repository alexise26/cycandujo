import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from 'ng2-scroll-to-el';
import {APP_ROUTING_GENERAL} from './general.routes';

//components
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { GeneralComponent } from './general.component';

@NgModule({
  imports: [
    CommonModule,
    APP_ROUTING_GENERAL,ScrollToModule.forRoot()
      ],
  exports: [ GeneralComponent,BlogComponent, PostComponent ],
  providers: [],
  declarations: [NavbarComponent, HomeComponent, BlogComponent, PostComponent, PostsComponent, GeneralComponent]
})
export class GeneralModule { }
