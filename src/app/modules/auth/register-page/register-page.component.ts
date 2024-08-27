import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../data/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  registerData = { username: '', phoneNumber: '', password: '' };
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService
      .register(
        this.registerData.username,
        this.registerData.phoneNumber,
        this.registerData.password
      )
      .subscribe({
        next: (response) => {
          console.log('Registro exitoso', response);
          this.router.navigate(['/auth/login']); // Redirigir al login después del registro
        },
        error: (error) => {
          this.errorMessage = error.message;
          console.error('Error en el registro', error);
        },
      });
  }
}
