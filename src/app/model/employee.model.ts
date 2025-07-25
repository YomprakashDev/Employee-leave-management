

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