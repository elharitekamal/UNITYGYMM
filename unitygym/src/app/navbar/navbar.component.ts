import { Component } from '@angular/core';
import { AuthService } from '../services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 constructor(private authService: AuthService, private router: Router) {}
  logout() {
    // Clear token from client-side storage
    this.authService.logout();
this.router.navigate(['/login']);
  }
}
