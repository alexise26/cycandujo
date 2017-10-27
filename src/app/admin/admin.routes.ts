import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';


const APP_ROUTES: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'admin' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
