import { Component, inject, signal } from '@angular/core';
import { EmployeeServices } from '../../services/employee';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  loginServices = inject(EmployeeServices)
  email = signal<string>('')
  password = signal<string>('')
router = inject(Router)
  loginData = signal([])
  onSubmitLogin() {
    this.loginServices.onLogin({ emailId: this.email(), password: this.password() })
    .subscribe({
      next:(result:any) => {
        if(result.result){
          alert('login success')
          localStorage.setItem('loginUser',result.data)
          console.log(result.data)
        this.router.navigateByUrl('/dashboard')
        
        }
        
      },
      error:(error) => {
        console.log(error)
        alert('login failed')
      }
    })
  }

}
