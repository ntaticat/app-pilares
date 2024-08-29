import { Component } from '@angular/core';
import { AuthService } from '../../../../data/services/auth.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  userData: any;

  isAuthenticated = false;
  username: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    console.log('CONSTRUCTOR HEADER');
  }

  ngOnInit(): void {
    console.log('ONINIT HEADER');
    this.route.data.subscribe((data) => {
      this.userData = data['user']; // Datos resueltos, incluso si es un usuario "Guest"
      this.username = data['user'].username;
      console.log(data['user']);

      if (this.username !== 'Guest') {
        this.isAuthenticated = true;
      }
    });

    // Detectar navegación a la misma ruta
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects === '/') {
          // Lógica para recargar o actualizar la página
          window.location.reload();
        }
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
