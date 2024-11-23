import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-data-bindings',
  imports: [
    FormsModule
  ],
  templateUrl: './data-bindings.component.html',
  styleUrl: './data-bindings.component.css'
})
export class DataBindingsComponent {

  tutorialName: string = 'Angular 19';
  inputType: string = "text";
  myId: string = '201-15-13610';
  isNew: boolean = true;
  currentDate: Date = new Date();
  myClassName: string = 'bg-primary';


  constructor() {

  }

  showAlert(messege: string) {
    alert(messege);
  }

  changeTutorialName() {
    this.tutorialName = 'React Js.'
  }
}
