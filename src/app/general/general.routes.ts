import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BlogComponent} from './components/blog/blog.component';
import {PostComponent} from './components/post/post.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'blog/:post', component: BlogComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING_GENERAL = RouterModule.forRoot(APP_ROUTES);
