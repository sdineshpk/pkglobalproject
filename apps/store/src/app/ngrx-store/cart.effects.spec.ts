import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Action } from '@ngrx/store';
import * as CartActions from './cart.actions';
import * as cartReducer from '../ngrx-store/cart.reducer';
import { CartEffects } from '../ngrx-store/cart.effects';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('CartEffects', () => {
  let actions$: Observable<Action>;
  let cartEffects: CartEffects;
  let httpClient: HttpClient;

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
        {
          provide: HttpClient,
          useValue: jasmine.createSpyObj('HttpClient', ['get']),
        },
      ],
    });

    cartEffects = TestBed.inject(CartEffects);
    httpClient = TestBed.inject(HttpClient);
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
  it('should dispatch AddBooks action when getBooksByName action is dispatched', () => {
    const action = new CartActions.GetBooksByName('Angular');
    const state = cartReducer.cartReducer(initialState, action);
    expect(state.items.length).toEqual(0);

    httpClient.get.and.returnValue(of(mockBooks));
    actions$ = of({ type: CartActions.GET_BOOKSBYNAME, payload: 'Angular' });

    cartEffects.getBooksByName$.subscribe(() => {
      expect(action.type).toBe(CartActions.GET_BOOKSBYNAME);
      expect(action.payload).toEqual('Angular');
    });
  });
});
