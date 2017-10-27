import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { BlogComponent } from './general/components/blog/blog.component';
// import { PostComponent } from './general/components/post/post.component';
import { AdminComponent } from './admin/admin.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: GeneralComponent},
  { path: 'admin', component: AdminComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
