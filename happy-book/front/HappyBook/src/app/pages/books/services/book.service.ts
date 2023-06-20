import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _books: any = [];

  constructor() { }


  set books(books: any)
  {
    console.log( 'set books', books );
    
    this._books = books;
  }
  // setBooks(books: any)
  // {
  //   console.log( 'setBooks', books );
    
  //   this._books = books;
  // }


  get books(): any
  {
    return this._books;
  }
  // getBooks(): any
  // {
  //   return this._books;
  // }

}
