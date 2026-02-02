import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wildcard } from './wildcard';

describe('Wildcard', () => {
  let component: Wildcard;
  let fixture: ComponentFixture<Wildcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wildcard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wildcard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
