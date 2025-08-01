import { Component,inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeServices } from '../../services/employee';
@Component({
  selector: 'app-leave',
  imports: [ReactiveFormsModule],
  templateUrl: './leave.html',
  styleUrl: './leave.scss'
})
export class Leave {
 showModal = false;

 leaveForm:FormGroup
  employeeServiece = inject(EmployeeServices)
 constructor(private lf:FormBuilder){
  this.leaveForm =  this.lf.group({
     leaveType: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      noOfDays: [{ value: ''}],
      details: ['', Validators.required]
  })

  const loginUser = localStorage.getItem('loginUser')
  console.log('beteween login console')
if(loginUser!= null){
  const loggedData = JSON.parse(loginUser);
  console.log(loggedData)
}

}

 

 
onSubmitForm(){
this.employeeServiece.addNewLeave(this.leaveForm.value).subscribe({
      next: (res: any) => {
        if (res.result) {
         
          alert('form is submitted')
        
        }else{
          alert('error in submmiting form')
        }
      },
      error:()=>{
        console.log('error')

      }
    })

  this.closeModal()
 }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
