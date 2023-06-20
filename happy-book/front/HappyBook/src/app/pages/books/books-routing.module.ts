import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [

  // > site.com/books
  // > site.com/book
  // > site.com/book/42
  // > site.com/book/42/edit
  // > site.com/book/42/delete

  // Liste des livres (index)
  // > site.com/books
  // > site.com/nos-livres
  {
    path: 'nos-livres',
    component: IndexComponent
  },

  // Creation d'un livre (create)
  // > site.com/book
  {
    path: 'livre',
    component: CreateComponent
  },

  // Detail d'un livre (read)
  // > site.com/book/42
  {
    path: 'livre/:id',
    component: ReadComponent
  },

  // Modification d'un livre (update)
  // > site.com/book/42/edit
  {
    path: 'livre/:id/edit',
    component: UpdateComponent
  },
  
  // Suppression d'un livre (delete)
  // > site.com/book/42/delete
  {
    path: 'livre/:id/delete',
    component: DeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
