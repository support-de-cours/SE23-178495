import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // Books
  // > site.com/nos-livres
  // {
  //   path: 'nos-livres',
  //   component: BooksComponent
  // },


  // Default Route
  {
    path: '', // > capture site.com/
    redirectTo: 'homepage', // > redirige vers site.com/homepage
    pathMatch: 'full'
  },

  // WildCard Route
  // 404/NotFound
  // > site.com/truc
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
