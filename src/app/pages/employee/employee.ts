import { Component, inject, OnInit, signal } from '@angular/core';
import { EmployeeServices } from '../../services/employee';
import { responseEmployee, responseEmployeeData } from '../../model/employee.model';
import { AddEmployee } from "../../components/add-employee/add-employee";

@Component({
  selector: 'app-employee',
  imports: [AddEmployee],
  templateUrl: './employee.html',
  styleUrl: './employee.scss'
})

export class Employee implements OnInit {

  employeeService = inject(EmployeeServices)
  employeeData: responseEmployeeData[] = []

  ngOnInit(): void {
    this.getEmployeeData()
  }

  isEmployeeCreated = signal(false)


  openModel() {
    this.isEmployeeCreated.update((prv) => !prv)
  }
  closeModel(){
    this.isEmployeeCreated.set(false)
  }
  getEmployeeData() {
    this.employeeService.getAllEmployeeData().subscribe({
      next: (response: responseEmployee) => {
        this.employeeData = response.data
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
