import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public books: any = [];

  constructor(
    private http: HttpClient
  ){}

  ngOnInit(): void
  {
    this.http
      .get("books")
      .subscribe(response => {

        this.books = response;
        
      });
  }

}
