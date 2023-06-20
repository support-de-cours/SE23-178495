import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './pages/homepage/homepage.module';
import { BooksModule } from './pages/books/books.module';
import { LifecycleExampleComponent } from './lifecycle-example/lifecycle-example.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleExampleComponent,
  ],
  imports: [
    BrowserModule,

    HomepageModule,
    BooksModule,

    // Toujours à la fin des "imports"
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
