import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInterface } from '../model/login.model';
import { map, Observable } from 'rxjs';
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

  getAllDepartmentData() {
    return this.http.get('https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetDepartments').pipe(
      map((res:any) => res.data))
  }

  getAllRolesData() {
    return this.http.get('https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetAllRoles').pipe(
      map((res:any) => res.data))
  }

  createNewEmployee(obj:any){
    console.log(this.http.post('https://freeapi.miniprojectideas.com/api/EmployeeLeave/CreateEmployee',obj))
    return this.http.post('https://freeapi.miniprojectideas.com/api/EmployeeLeave/CreateEmployee',obj)
  }

}
