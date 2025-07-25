import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInterface } from '../model/login.model';
import { Observable } from 'rxjs';
import { responseEmployee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServices {
  constructor(private http: HttpClient) { }
  onLogin(loginObj: LoginInterface) {
    return this.http.post('https://freeapi.miniprojectideas.com/api/EmployeeLeave/Login',
      loginObj
    )
  }

  getAllEmployeeData():Observable<responseEmployee> {
    return this.http.get<responseEmployee>('https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetEmployees')
  }



}
