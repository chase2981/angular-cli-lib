import { Component } from '@angular/core';

@Component({
  selector: 'rd-forms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rd-forms';
  communities = [{
    id: 1,
    name: 'Arroyo Vista'
  },{
    id: 20,
    name: 'Falls at Riverwoods'
  }];
  communityGroup = {
    id: 1,
    name: 'Arroyo Vista'
  };
  fileRelationType: any;

  constructor(){ }

  onChange(event: any) {
    console.log('change!!', event);
  }
}
