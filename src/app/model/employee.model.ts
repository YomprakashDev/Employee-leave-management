
export interface responseEmployee {
    message: string;
    result: boolean;
    data: any
}

export interface responseEmployeeData {
    employeeId: number;
    employeeName: string;
    deptId: number,
    deptName: string;
    contactNo: number,
    emailId: string;
    role: string;
}

export interface NewEmployee {
  employeeName: string;
  contactNo: string;
  emailId: string;
  deptId: string;
  password: string;
  gender: string;
  role: string;
}
