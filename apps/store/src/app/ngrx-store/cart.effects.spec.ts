import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Action } from '@ngrx/store';
import * as CartActions from './cart.actions';
import * as cartReducer from '../ngrx-store/cart.reducer';
import { CartEffects } from '../ngrx-store/cart.effects';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { BooksFacadeService } from './books-facade.service';

describe('CartEffects', () => {
  let actions$: Observable<Action>;
  let cartEffects: CartEffects;
  //let httpClient: HttpTestingController;
  let service: BooksFacadeService;

  let initialState: cartReducer.State;
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
  beforeEach(() => {
   TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CartEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        HttpClient
        // {
        //   provide: HttpClient,
        //   useValue: jasmine.createSpyObj('HttpClient', ['get']),
        // },
        //{ provide: HttpClient, useValue: HttpClient }
      ],
    });

    cartEffects = TestBed.inject(CartEffects);
    service = TestBed.inject(BooksFacadeService);
   // httpClient = TestBed.inject(HttpTestingController);
  });
  beforeEach(() => {
    initialState = cartReducer.initialState;
  });

  afterEach(() => {
    initialState = cartReducer.initialState;
  });

  it('should create cartEffects ', () => {
    expect(cartEffects).toBeTruthy();
  });
  it('should dispatch AddBooks action when getBooksByName action is dispatched', async () => {
    const action = new CartActions.GetBooksByName('Angular');
    const state = cartReducer.cartReducer(initialState, action);
    expect(state.items.length).toEqual(0);

    //httpClient.get.and.returnValue(of(mockBooks));
    //jest.spyOn(service,'getBooksByName').mockImplementation(()=>of(mockBooks));
    actions$ = of({ type: CartActions.GET_BOOKSBYNAME, payload: 'Angular' });
    cartEffects.getBooksByName$.subscribe((res) => {
      expect(action.type).toBe(CartActions.GET_BOOKSBYNAME);
      expect(action.payload).toEqual('Angular');
    });
    
  });

  it('should Return  AddBooksFailure action when getBooksByName action is dispatched', async () => {
    const action = new CartActions.GetBooksByName('Angular');
    const state = cartReducer.cartReducer(initialState, action);
    expect(state.items.length).toEqual(0);

    actions$ = of({ type: CartActions.GET_BOOKSBYNAME, payload: 'Angular' });
    await cartEffects.getBooksByName$.subscribe((res) => {      
      expect(action.payload).toEqual('Angular');
    },(err)=>{
      expect(action.type).toBe(CartActions.GET_BOOKSBYNAME);
      expect(action.payload).toEqual(err);
    });
    
  });
});
