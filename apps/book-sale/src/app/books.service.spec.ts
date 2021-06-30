import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { BooksService } from './books.service';

describe('BooksService', () => {
  let service: BooksService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BooksService],
    });
    service = TestBed.inject(BooksService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should the all the books as result when getBooksByName is called with search keyword', () => {
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

    service.getBooksByName('angular').subscribe((results) => {
      expect(mockBooks).toBe(results);
    });

    const req = httpTestingController.expectOne(service.BASE_URL + 'angular');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(mockBooks);
    httpTestingController.verify();
  });
});
