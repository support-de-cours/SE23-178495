import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BooksComponent } from './pages/books/books.component';

const routes: Routes = [

  // Homepage
  // > site.com/
  {
    path: '',
    component: HomepageComponent
  },

  // Books
  // > site.com/nos-livres
  {
    path: 'nos-livres',
    component: BooksComponent
  },


  // Default Route

  // WildCard Route
  // 404/NotFound
  // > site.com/gsjhfgsjfgsjhfg
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
