import { Component, OnInit } from '@angular/core';
import { BookService } from './pages/books/services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'HappyBook';
  someData: any = [];

  constructor(
    private bookService: BookService
  ){}

  ngOnInit(): void {
    this.bookService.myObservableBooks
      .subscribe(data => this.someData = data);
  }

}
