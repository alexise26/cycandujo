import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { ScrollToModule } from 'ng2-scroll-to-el';
import {APP_ROUTING} from './app.routes';
//Modules
import {GeneralModule} from './general/general.module';
import {AdminModule} from './admin/admin.module';
//Services
//Pipes
//Directives
//Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  APP_ROUTING,ScrollToModule.forRoot(), BrowserModule,AdminModule, GeneralModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
