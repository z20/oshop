import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductsngComponent } from './admin-productsng.component';

describe('AdminProductsngComponent', () => {
  let component: AdminProductsngComponent;
  let fixture: ComponentFixture<AdminProductsngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductsngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductsngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
