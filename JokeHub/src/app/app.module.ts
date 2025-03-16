import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { DragDropModule } from '@angular/cdk/drag-drop'; 



@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { 
  constructor (private injector : Injector){}
  ngDoBootStrap()
  {
    const el = createCustomElement(HelloComponent,{injector : this.injector})
    customElements.define('joke',el);
  }

}
