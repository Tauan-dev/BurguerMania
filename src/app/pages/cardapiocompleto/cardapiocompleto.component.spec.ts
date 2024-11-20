import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapiocompletoComponent } from './cardapiocompleto.component';

describe('CardapiocompletoComponent', () => {
  let component: CardapiocompletoComponent;
  let fixture: ComponentFixture<CardapiocompletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardapiocompletoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardapiocompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
