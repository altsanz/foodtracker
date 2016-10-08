import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import {Menu} from './restaurant/menu';
import {MenuService} from './restaurant/menu.service';

//import {MdIcon, MdIconRegistry} from '@angular2-material/icon/icon';
//import {MdIconRegistry} from '@angular/material';

@Component({
    selector: 'client-menu',
    templateUrl: 'menu.component.html'
  //  viewProviders: [MdIconRegistry],
  //  directives: [MdIcon]
})

export class MenuComponent implements OnInit { 

    menu = new Menu();
   
    constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _menuService: MenuService) { }
   
    url:any;
    
    ngOnInit() {
        this._menuService.getLastMenu().then(menu => {
        this.menu = menu;
        this.url = menu.img});
    }
        
	getAlert(newMessage: any){
        alert(newMessage);
    }

    getDishPreview(){
    	alert("this is cool");	
    }

    loadImagePreview(newImage: any) {
        this.url=newImage;
        //alert("IMAGE "+newImage + " var component="+this.url);
    }

}
