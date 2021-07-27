import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BooksFacadeService } from '../../app/ngrx-store/books-facade.service';
import * as fromApp from '../../app/ngrx-store/app.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from '../ngrx-store/cart.effects';
import { APP_BASE_HREF } from '@angular/common';

const mockBooks = [
  {
    id: '1',
    title: 'Angular',
    imageLink: '/',
    description: 'desc1',
    authors: 'author1',
    ratingsCount: '5',
    publisher: 'pub1',
    pageCount: '10',
    language: 'en',
  },
];
describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let bookService: BooksFacadeService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([]),
        StoreModule.forRoot(fromApp.appReducer),
        EffectsModule.forRoot([CartEffects]),
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [FormBuilder,BooksFacadeService,{provide: APP_BASE_HREF, useValue : '/' }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    bookService = TestBed.inject(BooksFacadeService);
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.searchForm.valid).toBeFalsy();
  });
  it('form valid when non empty', () => {
    component.searchForm.setValue({ searchWord: 'Angular' });
    expect(component.searchForm.valid).toBeTruthy();
  });
  it('searchWord field invalid with empty', () => {
    const searchWord = component.searchForm.controls.searchWord;
    expect(searchWord.valid).toBeFalsy();
  });
  it('searchWord field validity', () => {
    const searchWord = component.searchForm.controls.searchWord;
    expect(searchWord.hasError).toBeTruthy();
  });
  it('searchWord field validity with value provided', () => {
    const searchWord = component.searchForm.controls.searchWord;
    component.searchForm.setValue({ searchWord: 'Angular' });
    expect(searchWord.valid).toBeTruthy();
  });

  it('should submit form', () => {
    expect(component.searchForm.valid).toBeFalsy();
    const searchWord = component.searchForm.controls.searchWord;
    component.searchForm.setValue({ searchWord: 'Angular' });
    expect(searchWord.valid).toBeTruthy();

    component.onSubmit();

    expect(searchWord.value).toEqual('Angular');
  });
  it('should check getBookDetails', () => {
   spyOn(bookService, 'getBooksByName').and.returnValue(mockBooks);
   //spyOn(bookService, 'setSelectedId').and.returnValue(mockBooks);
    component.searchForm.setValue({ searchWord: 'Angular' });
    bookService.getBooksByName('Angular');
    
    const navigateSpy = spyOn(router, 'navigate');
    component.getBookDetails(1);
    expect(navigateSpy).toHaveBeenCalledWith(["/bookdetails"]);
  });
});
