import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import {Menu} from './menu';
import {MenuService} from './menu.service';

@Component({
    selector: 'restaurant-menu',
    templateUrl: 'restaurant-menu.component.html'
})

export class RestaurantMenuComponent implements OnInit {
    
   menu = new Menu();
    
   constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _menuService: MenuService) { }
       
   ngOnInit() {
                this._menuService.getLastMenu().then(menu => {
                this.menu = menu;});
        }
        
}