import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookDetailsComponent } from './book-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CartService } from '../cart.service';
import { CollectionService } from '../collection.service';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookDetailsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [BooksService,CartService,CollectionService],
    }).compileComponents();
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add item to cart', () => {
    component.addToCart();
  });

  it('should add collection and move to billing page', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.buyNow();
    expect(navigateSpy).toHaveBeenCalledWith(["/home/billingpage"]);
  });
});
