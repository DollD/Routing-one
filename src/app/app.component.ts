import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { trigger, animate, state, style, transition } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('perfectAnim', [
      state('void', style({
        color: '#FFF',
        transform:'translateY(-100px)',
        fontSize: '0'
      })),
      state('*', style({
        color: '#000',
        transform:'translateY(300px)',
        fontSize: '25px'
      })),
      transition('void => *', animate(3000))
    ])
  ]
})
export class AppComponent {
  title = 'app-awesome';
  menu;
  userForm;
  constructor(
    private fb: FormBuilder
  ){
    this.userForm = this.fb.group({
      name: [],
      age: []
    });
  }

  change(){
    this.title = 'app-cool';
    this.userForm.get('name').setValue('Raj');
  }
}
