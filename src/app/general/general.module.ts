import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ScrollToModule } from 'ng2-scroll-to-el';
import {APP_ROUTING_GENERAL} from './general.routes';
import {LOCALE_ID} from '@angular/core'; //importar para español
//Services
import {BlogService} from '../services/blog.service';
//Pipes
import { PreviewPipe } from '../pipes/preview.pipe';
import { FilterPipe } from '../pipes/filter.pipe';
import { TextPipe } from '../pipes/text.pipe';
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
  providers: [{provide:LOCALE_ID, useValue:"es"}, BlogService],
  declarations: [TextPipe,PreviewPipe,FilterPipe, NavbarComponent, HomeComponent, BlogComponent, PostComponent, PostsComponent, GeneralComponent]
})
export class GeneralModule { }
