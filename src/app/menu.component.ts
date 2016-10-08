import { Component, OnInit } from '@angular/core';

//import {MdIcon, MdIconRegistry} from '@angular2-material/icon/icon';
//import {MdIconRegistry} from '@angular/material';

@Component({
    selector: 'menu',
    templateUrl: 'menu.component.html'
  //  viewProviders: [MdIconRegistry],
  //  directives: [MdIcon]
})

export class MenuComponent { 

	url:any = "http://www.abc.es/Media/201407/10/tortilla-patata--644x362.jpg";

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
