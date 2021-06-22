import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemsComponent } from './cart-items.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CartService } from '../cart.service';

describe('CartItemsComponent', () => {
  let component: CartItemsComponent;
  let fixture: ComponentFixture<CartItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartItemsComponent ],
      imports: [
        RouterTestingModule],
      providers:[CartService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
