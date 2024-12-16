import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural.component.html',
  styleUrl: './structural.component.css'
})
export class StructuralComponent {
  isDiv1Visible = true;
  isDiv2Visible: boolean = true;
  isDiv3Visible:boolean = true;
  num1 = '';
  num2 = '';

  showDiv1() {
    this.isDiv1Visible = true;
  }
  hideDiv1() {
    this.isDiv1Visible = false;
  }
  toggleDiv2 () {
    // if(this.isDiv2Visible == true) {
    //   this.isDiv2Visible = false;
    // } 
    // else {
    //   this.isDiv2Visible = true;
    // }
    this.isDiv2Visible = !this.isDiv2Visible
  }
}
