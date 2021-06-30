import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchPageComponent } from './search-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksService } from '../../books.service';
import { of } from 'rxjs';

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
describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;
  let bookService: BooksService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchPageComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [FormBuilder, BooksService],
    }).compileComponents();
    bookService = TestBed.inject(BooksService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
    spyOn(bookService, 'getSearchKeyWord').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('search book based on inital loading',()=>{
    bookService.setSearchKeyWord("Angular");
    spyOn(bookService, 'getBooksByName').and.returnValue(of(mockBooks));
    component.ngOnInit();
    const searchWord = component.searchForm.controls.searchWord;
    expect(searchWord.value).toEqual('Angular');
    expect(bookService.getBooksByName).toBeTruthy();
  })
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
    spyOn(bookService, 'getBooksByName').and.returnValue(of(mockBooks));
    spyOn(bookService, 'setSearchKeyWord').and.returnValue(undefined);
    component.searchForm.setValue({ searchWord: 'Angular' });

    component.onSubmit();

    expect(bookService.getBooksByName).toBeTruthy();
  });

  it('getBookDetails', () => {
    spyOn(bookService, 'getBooksByName').and.returnValue(of(mockBooks));
    spyOn(bookService, 'setSearchKeyWord').and.returnValue(undefined);
    component.searchForm.setValue({ searchWord: 'Angular' });

    component.getBookDetails(0);

    expect(bookService.getBooksByName).toBeTruthy();

  });
});
