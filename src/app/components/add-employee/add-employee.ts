import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  imports: [],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.scss'
})
export class AddEmployee {

 @Input() onClose!: () => void;
}
