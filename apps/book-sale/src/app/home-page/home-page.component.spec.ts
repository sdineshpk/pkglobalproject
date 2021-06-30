import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent, MenuItem } from './home-page.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [RouterTestingModule, RouterModule],
    }).compileComponents();
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should route page', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const menuItems: MenuItem[] = [
      {
        label: 'Search',
        icon: 'search',
        routePath: '/home/search',
      },
    ];
    component.routePage(menuItems[0]);

    expect(navigateSpy).toHaveBeenCalledWith(['/home/search']);
  });
});
