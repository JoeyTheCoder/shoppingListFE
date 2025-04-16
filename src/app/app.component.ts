import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent]
})
export class AppComponent {
  showNavbar = true;
  showFooter = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Hide navbar on specific routes
      this.showNavbar = !event.url.includes('/login') && !event.url.includes('/register');
      this.showFooter = !event.url.includes('/login') && !event.url.includes('/register');
    });
  }
}
