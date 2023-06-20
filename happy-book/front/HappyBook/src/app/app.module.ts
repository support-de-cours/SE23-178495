import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './pages/homepage/homepage.module';
import { BooksModule } from './pages/books/books.module';
import { LifecycleExampleComponent } from './lifecycle-example/lifecycle-example.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './core/interceptors/api.interceptor';

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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
