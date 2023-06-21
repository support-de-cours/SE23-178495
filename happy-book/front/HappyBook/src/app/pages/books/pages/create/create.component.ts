import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  // Template Driven Form
  // --

  /*
  public title!: string;
  public description!: string;

  sendNewBook(): void
  {
    let data = {
      title: this.title,
      description: this.description
    }

    // Soumission des données au serveur
    console.log( data );
    
  }
  */


  // Reactive Form
  // --

  // public title = new FormControl("Mon super titre", [
  //   Validators.required
  // ]);
  // public description = new FormControl(null);
  // public price = new FormControl(9.99);

  // sendNewBook(): void
  // {
  //   const isTitleOk = this.title.valid;

  //   if (isTitleOk)
  //   {
  //     const data = {
  //       title: this.title.value,
  //       description: this.description.value,
  //       price: this.price.value,
  //     }
  
  //     console.log( data );
  //   }
  //   else 
  //   {
  //     alert("Il y a une erreur");
  //   }
  // }


  public bookForm = new FormGroup({
    title: new FormControl(null, [
      Validators.required
    ]),
    description: new FormControl(),
    price: new FormControl(null, [
      Validators.required
    ])
  });

  constructor(
    private http: HttpClient,
    private router: Router
  ){}


  sendNewBook(): void
  {    
    if (this.bookForm.valid)
    {
      // console.log( this.bookForm.value );
      this.http
        .post("books", this.bookForm.value)
        .subscribe((response: any) => {
          // console.log( response );
          this.router.navigate(['livre', response.id]);
        })
    }
  }

  back():void 
  {
    history.back();
  }
}
