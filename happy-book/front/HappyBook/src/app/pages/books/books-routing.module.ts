import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CreateComponent } from './pages/create/create.component';
import { ReadComponent } from './pages/read/read.component';
import { UpdateComponent } from './pages/update/update.component';
import { DeleteComponent } from './pages/delete/delete.component';

const routes: Routes = [


  // // Liste des livres (index)
  // // > site.com/books
  // // > site.com/nos-livres
  // {
  //   path: 'nos-livres',
  //   component: IndexComponent
  // },

  // // Creation d'un livre (create)
  // // > site.com/book
  // {
  //   path: 'livre',
  //   component: CreateComponent
  // },

  // // Detail d'un livre (read)
  // // > site.com/book/42
  // {
  //   path: 'livre/:id',
  //   component: ReadComponent
  // },

  // // Modification d'un livre (update)
  // // > site.com/book/42/edit
  // {
  //   path: 'livre/:id/edit',
  //   component: UpdateComponent
  // },
  
  // // Suppression d'un livre (delete)
  // // > site.com/book/42/delete
  // {
  //   path: 'livre/:id/delete',
  //   component: DeleteComponent
  // }



  // Liste des livres (index)
  // > site.com/books
  // > site.com/nos-livres
  {
    path: 'nos-livres',
    component: IndexComponent
  },


  // Creation d'un livre (create)
  // > site.com/livre
  // > site.com/livre/
  {
    path: 'livre',
    children: [
      {
        path: '',
        component: CreateComponent
      },
      {
        path: ':id',
        children: [

          // Detail d'un livre (read)
          // > site.com/book/42
          {
            path: '',
            component: ReadComponent
          },

          // Modification d'un livre (update)
          // > site.com/book/42/edit
          {
            path: 'edit',
            component: UpdateComponent
          },

          // Suppression d'un livre (delete)
          // > site.com/book/42/delete
          {
            path: 'delete',
            component: DeleteComponent
          }
        ]
      },
    ]
  },

  // > site.com/books

  // > site.com/book
  // > site.com/book/


  // > site.com/book/id

  // > site.com/book/id/read    read
  // > site.com/book/id/edit    edit
  // > site.com/book/id/delete  delete


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
