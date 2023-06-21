import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDeRenduComposantComponent } from './test-de-rendu-composant.component';

describe('Test De Rendu d\'un Composant', () => {
  let component: TestDeRenduComposantComponent;
  let fixture: ComponentFixture<TestDeRenduComposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDeRenduComposantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDeRenduComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the correct title', () => {
    const titleElement = fixture.nativeElement.querySelector('h1');
    expect(titleElement.textContent).toContain(component.title);
  });

  it('should be 42 !', () => {
    const app = fixture.componentInstance;
    expect(app.doSomething(21,21)).toEqual(42);
  });

  it('should be 42 !', () => {
    const app = fixture.componentInstance;
    expect(app.doSomething(40,2)).toEqual(42);
  });
});
