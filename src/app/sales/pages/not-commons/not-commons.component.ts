import { Component } from '@angular/core';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [
  ]
})
export class NotCommonsComponent {

  name: string = 'Isabel';
  gender: string = 'fem';

  invitationMap = {
    'man': 'invitarlo',
    'fem' : 'invitarla'
  }

}
