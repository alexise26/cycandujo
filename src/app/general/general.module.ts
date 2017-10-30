import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ScrollToModule } from 'ng2-scroll-to-el';
import {APP_ROUTING_GENERAL} from './general.routes';
//Services
import {BlogService} from '../services/blog.service';
//Pipes
import { PreviewPipe } from '../pipes/preview.pipe';
//components
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { GeneralComponent } from './general.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,APP_ROUTING_GENERAL,ScrollToModule.forRoot()
      ],
  exports: [ GeneralComponent,BlogComponent, PostComponent ],
  providers: [BlogService],
  declarations: [PreviewPipe, NavbarComponent, HomeComponent, BlogComponent, PostComponent, PostsComponent, GeneralComponent]
})
export class GeneralModule { }
