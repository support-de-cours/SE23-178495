import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _books: any = [];
  private _myObservableBooks:BehaviorSubject<any> = new BehaviorSubject<any>([
    "l1", 
    "l2", 
    "l3", 
  ])

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

  set myObservableBooks(someData: any)
  {
    this._myObservableBooks.next(someData);
  }
  get myObservableBooks(): BehaviorSubject<any>
  {
    return this._myObservableBooks;
  }

}
