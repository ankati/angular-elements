import { BrowserModule } from '@angular/platform-browser';
import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents :  [
    AppComponent
 ]
})
export class AppModule { 

  constructor(private injector : Injector){}
  ngDoBootstrap(){
      const el = createCustomElement(AppComponent, {injector : this.injector});
  customElements.define('analytics-counter',el);
  }
}
