import {  Component, inject,  signal } from '@angular/core';
import { EmployeeServices } from '../../services/employee';
import { AddEmployee } from "../../components/add-employee/add-employee";
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-employee',
  imports: [AddEmployee],
  templateUrl: './employee.html',
  styleUrl: './employee.scss'
})

export class Employee {

  employeeService = inject(EmployeeServices)

  
  employeeResponse = toSignal(
    this.employeeService.getAllEmployeeData(),
    {
      initialValue: {
        message: '',
        result: false,
        data: []
      }
    }
  );

  oneDeleteEmpoyee(id:string){
    this.employeeService.deleteEmployee(id).subscribe({
      next:(res) => {
        console.log(res)
      },
      error:() => {
        
      }
    })

  }
  

  isEmployeeCreated = signal(false)

  openModel() {
    console.log('open model is called')
    this.isEmployeeCreated.update(prv => !prv)
  }
  closeModel() {
    console.log('close model is called')
    this.isEmployeeCreated.set(false)
  }

}
