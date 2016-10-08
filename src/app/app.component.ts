import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <navbar></navbar>
        <div>
            <router-outlet></router-outlet>
        </div>
  `
})
export class AppComponent { }
