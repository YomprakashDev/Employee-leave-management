import { Component, inject, OnInit } from '@angular/core';
import { EmployeeServices } from '../../services/employee';
import { responseEmployee, responseEmployeeData } from '../../model/employee.model';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.scss'
})
export class Employee implements OnInit {

employeeService = inject(EmployeeServices)
employeeData :responseEmployeeData[]=[]

ngOnInit(): void {
  this.getEmployeeData()
}

getEmployeeData(){
  this.employeeService.getAllEmployeeData().subscribe({
    next:(response:responseEmployee)=>{
      this.employeeData = response.data
    },
    error:(err) => {
      console.log(err)
    }
  })
}
}
