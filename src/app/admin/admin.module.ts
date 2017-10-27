import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {APP_ROUTING} from './admin.routes';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ AdminComponent ],
  declarations: [AdminComponent]
})
export class AdminModule { }
