import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'navbar',
    templateUrl: '/navbar.component.html'
})
export class NavBarComponent {
    private fullScreenRoutes: string[];

    constructor(private router: Router) { 
    	this.fullScreenRoutes = ['restaurant/login', 'login'];
 	}
    
    public isCurrentRoute = (route: string): boolean => {
        return this.router.isActive(route, false);
    }

    public isFullScreenRoute = (): boolean => {
    	
    	for (let fullScreenRoute of this.fullScreenRoutes) {
    		if (this.router.isActive(fullScreenRoute, false)) return true;
    	}
    	
    	return false;
    }
}