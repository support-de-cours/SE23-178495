import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {

  // Interpolation unidirectionnelle : dataBinding
  message = 'Hello world';

  // Interpolation unidirectionnelle : propertyBinding
  image_source = "https://picsum.photos/200";

  // Interpolation unidirectionnelle : eventBinding
  changeHello()
  {
    this.message = 'Hello There';
  }

  // Interpolation multidirectionnelle : twoWayBinding
  username = "Bobby";
}
