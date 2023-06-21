import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  public bookId!: number;
  public book: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.bookId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void 
  {
    this.http
      .get(`books/${this.bookId}`)
      .subscribe(response => {
        this.book = response;
      })
  }

  proceed(): void
  {
    this.http
      .delete(`books/${this.bookId}`)
      .subscribe(() => {
        alert(`${this.book.title} à été supprimé`);
        this.router.navigate(['/nos-livres']);
      })
  }
}
