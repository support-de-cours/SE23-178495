import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  public bookId!: number;
  public book: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private bookService: BookService
  ){
    this.bookId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {

    console.log( this.bookService.books );
    
    setTimeout(() => {

      this.http
        .get(`books/${this.bookId}`)
        .subscribe(response => {
          this.book = response;
        })

    }, 3000);
  }

}
