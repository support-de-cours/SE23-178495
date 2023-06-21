import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public books: any = [];
  public observableBooks: any = [];

  constructor(
    private http: HttpClient,
    private bookService: BookService
  ){
    this.bookService.myObservableBooks
      .subscribe(data => this.observableBooks = data);
  }

  ngOnInit(): void
  {
    this.http
      .get("books")
      .subscribe(response => {
        this.books = response;
        // this.bookService.setBooks( response );
        this.bookService.books = response;
      });
  }

  changeObservable()
  {
    this.bookService.myObservableBooks = ["l4","l5","l6"];
  }

}
