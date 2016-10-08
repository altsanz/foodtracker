import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import { Validators } from '@angular/forms';
import {Menu} from './menu';
import {MenuService} from './menu.service';

@Component({
    selector: 'menu-add',
    templateUrl: 'menu-add.component.html'
})

export class MenuAddComponent implements OnInit {
    
   menu = new Menu();
    
   constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _menuService: MenuService) { }
       
   ngOnInit() {
        this._activatedRoute.params.forEach((params: Params) => {
            if (params['type'] === 'edit') {
                this._menuService.getLastMenu().then(menu => {
                this.menu = menu;});                
            }
            else if (params['type'] !== 'add')
                this._router.navigate(['/not-found']);
        });
        
    }
    
    save() {
        this._menuService.addMenu(this.menu)
                .then(x => {
                    this._router.navigate(['/restaurant/menu']);
                });
    }
}