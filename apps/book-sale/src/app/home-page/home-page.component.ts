import { Component } from '@angular/core';
import { Router } from '@angular/router';
export interface MenuItem {
  label: string;
  icon: string;
  routePath:string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  menuItems:MenuItem[]=[{
    label: 'Search',
    icon: 'search',
    routePath:'/home/search'
  },
  {
    label: 'Cart',
    icon: 'add_shopping_cart',
    routePath:'/home/cart'
  },
  {
    label: 'My Collection',
    icon: 'collections',
    routePath:'/home/collection'
  }]

  constructor( private router: Router) { }

  routePage(item:MenuItem){
    this.router.navigate([item.routePath]);
  }

}
