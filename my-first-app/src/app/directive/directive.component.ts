import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  // Directive Structurelle *ngIf
  // --

  isLoggedIn: boolean = false;

  changeLoggedState()
  {
    let state = !this.isLoggedIn;
    this.isLoggedIn = state;
  }


  // Directive structurelle *ngFor
  // --

  fruits : string[] = [
    "Pommes",
    "Poires",
    "Bananes"
  ];

  images: string[] = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/100",
    "https://picsum.photos/400/100",
  ];


  // Directive structurelle *ngSwitch
  // --

  variable: string = 'option2';


  // Directive d'attribut
  // --
  textColor: string = "red";
  fontSize: string = "20px";

}
