import { Component } from '@angular/core';

const MaConstant = 42;

@Component({
  selector: 'app-mon-composant',
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.css']
})
export class MonComposantComponent {

  // Des propriétés
  // --

  // Exemple de dataBinding

  // message: string = '';
  // message!: string;
  message: string = 'Message initial';

  // Exemple de propertyBinding
  imageUrl: string = 'https://picsum.photos/200';



  // Des méthodes
  // --

  changerMessage(): void 
  {
    this.message = 'Nouveau message';
  }

}
