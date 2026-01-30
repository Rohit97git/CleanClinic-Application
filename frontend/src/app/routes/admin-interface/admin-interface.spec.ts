import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInterface } from './admin-interface';

describe('AdminInterface', () => {
  let component: AdminInterface;
  let fixture: ComponentFixture<AdminInterface>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminInterface]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInterface);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
