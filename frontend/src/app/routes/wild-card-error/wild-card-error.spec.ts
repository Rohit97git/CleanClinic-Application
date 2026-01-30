import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildCardError } from './wild-card-error';

describe('WildCardError', () => {
  let component: WildCardError;
  let fixture: ComponentFixture<WildCardError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WildCardError]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildCardError);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
