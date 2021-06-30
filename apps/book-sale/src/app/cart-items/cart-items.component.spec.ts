import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemsComponent } from './cart-items.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

describe('CartItemsComponent', () => {
  let component: CartItemsComponent;
  let fixture: ComponentFixture<CartItemsComponent>;
  let router: Router;
  let cartService:CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartItemsComponent],
      imports: [RouterTestingModule],
      providers: [CartService],
    }).compileComponents();
    router = TestBed.inject(Router);
    cartService = TestBed.inject(CartService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete cart item', () => {
    component.deleteItem("");
    expect(cartService.deleteItem).toBeTruthy();
  });

  it('should route page', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.proceedToCheckout();

    expect(navigateSpy).toHaveBeenCalledWith(['/home/billingpage']);
  });
});
