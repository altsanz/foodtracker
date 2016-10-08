import { Component, OnInit } from '@angular/core';

//import {MdIcon, MdIconRegistry} from '@angular2-material/icon/icon';
//import {MdIconRegistry} from '@angular/material';

@Component({
    selector: 'client-menu',
    templateUrl: 'menu.component.html'
  //  viewProviders: [MdIconRegistry],
  //  directives: [MdIcon]
})

export class MenuComponent { 
    
    actionButtonText: string;
    private acceptPetitionLabel: string;
    private cancelPetitionLabel: string;

	url:any = "http://www.abc.es/Media/201407/10/tortilla-patata--644x362.jpg";

    constructor() {
        this.acceptPetitionLabel = 'Apúntame!',
        this.cancelPetitionLabel = 'Desapúntame';
        this.actionButtonText = this.acceptPetitionLabel;
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

    triggerPetition() {

        if(this.actionButtonText === this.acceptPetitionLabel) {
            this.actionButtonText = this.cancelPetitionLabel;
        } else {
            this.actionButtonText = this.acceptPetitionLabel;
        }
        
    }

}
