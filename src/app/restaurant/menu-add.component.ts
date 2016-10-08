import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import { Validators } from '@angular/forms';
import {Menu} from './menu';
import {MenuService} from './menu.service';

@Component({
    selector: 'menu-add',
    templateUrl: 'menu-add.component.html'
})

export class MenuAddComponent {
    
    menu = new Menu();
    
    constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _menuService: MenuService) { }
    
    
    save() {
        this._menuService.addMenu(this.menu)
                .then(x => {
                    this._router.navigate(['/restaurant/menu']);
                });
    }
}