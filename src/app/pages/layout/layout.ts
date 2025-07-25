import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

  router = inject(Router)

    onLogout(){
    localStorage.removeItem('loginUser')
    this.router.navigateByUrl('/login')
  }
}
