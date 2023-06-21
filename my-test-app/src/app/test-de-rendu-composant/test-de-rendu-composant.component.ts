import { Component } from '@angular/core';

@Component({
  selector: 'app-test-de-rendu-composant',
  template: '<h1>{{ title }}</h1>',
})
export class TestDeRenduComposantComponent {
  public title: string = 'Mon application Angular';

  doSomething(a: number, b: number): number{
    return a + b;
  }
}
