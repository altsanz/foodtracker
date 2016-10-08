import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Menu } from './menu';

@Injectable()
export class MenuService {
    private _url = "http://localhost:5000/menus";

    constructor(private http: Http) { }

    getMenus(): Promise<Menu[]> {
        return this.http.get(this._url)
            .toPromise()
            .then(resp => resp.json() as Menu[])
            .catch(this.handleError);
    }

    getLastMenu(): Promise<Menu> {
        return this.getMenus().then((menus => {
            var menu = menus[menus.length -1];
            return menu;
        }))
    }
    
    addMenu(menu: any) {
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers });
        menu = JSON.stringify(menu);
        return this.http.post(this._url, menu, options)
            .toPromise()
            .then(resp => resp.json())
            .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}