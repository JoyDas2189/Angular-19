import { Component } from '@angular/core';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { DataBindingsComponent } from './Components/data-bindings/data-bindings.component';

@Component({
  selector: 'app-root',
  imports: [
    AddEmployeeComponent,
    EmployeeListComponent,
    DataBindingsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19';
}
