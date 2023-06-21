import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestDeRenduComposantComponent } from './test-de-rendu-composant/test-de-rendu-composant.component';

@NgModule({
  declarations: [
    AppComponent,
    TestDeRenduComposantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
