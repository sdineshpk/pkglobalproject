import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { BooksFacadeService } from '../../ngrx-store/books-facade.service';
import * as fromApp from '../../ngrx-store/app.reducer';

import { MycollectionItemComponent } from './mycollection-item.component';
import { CartEffects } from '../../ngrx-store/cart.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MycollectionItemComponent', () => {
  let component: MycollectionItemComponent;
  let fixture: ComponentFixture<MycollectionItemComponent>;
  let bookService: BooksFacadeService;
  let store: Store<fromApp.AppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MycollectionItemComponent],
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot(fromApp.appReducer),
        EffectsModule.forRoot([CartEffects]),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycollectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    bookService = TestBed.inject(BooksFacadeService);
    store = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
