import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeServices } from '../../services/employee';
import { AsyncPipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-employee',
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.scss'
})

export class AddEmployee implements OnInit {

  @Output() close = new EventEmitter()

  departmentList$: Observable<any[]> = new Observable<any[]>
  rolesList$: Observable<any[]> = new Observable<any[]>

  onCloseDailog() {
    this.close.emit()
  }

  employeeForm!: FormGroup;
  private formBuilder = inject(FormBuilder);

  employeeServiece = inject(EmployeeServices)
  onSubmitForm() {

    console.log('Form Value:', this.employeeForm.value);
    this.employeeService.createNewEmployee(this.employeeForm.value).subscribe({
      next: (res: any) => {
        if (res.result) {
         
          alert('form is submitted')
          this.employeeService.getAllEmployeeData()
        }else{
          alert('error in submmiting form')
        }
      },
      error:()=>{
        console.log('error')

      }
    })
    this.onCloseDailog()
  }

  employeeService = inject(EmployeeServices)

  ngOnInit(): void {

    this.employeeForm = this.formBuilder.group({
      employeeName: ['', Validators.required],
      contactNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      emailId: ['', [Validators.required, Validators.email]],
      deptId: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', Validators.required],
      role: ['', Validators.required]
    })
    this.departmentList$ = this.employeeService.getAllDepartmentData()
    this.rolesList$ = this.employeeService.getAllRolesData()
  }
}
