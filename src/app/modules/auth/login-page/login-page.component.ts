import { Component } from '@angular/core';
import { AuthService } from '../../../data/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  loginData = {
    phoneNumber: '',
    password: '',
  };

  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService
      .login(this.loginData.phoneNumber, this.loginData.password)
      .subscribe({
        next: (response) => {
          localStorage.setItem('token', response.access_token); // Guardar el token en localStorage
          this.router.navigate(['/']); // Redirigir al perfil u otra página
        },
        error: (error) => {
          this.errorMessage = error.message;
          console.error('Error en el login', error);
        },
        complete: () => {
          console.log('Login request completed');
        },
      });
  }
}
