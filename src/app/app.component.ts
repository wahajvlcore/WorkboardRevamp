import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ValueLinkAMS';
  showHeaderFooter: boolean = true;

  constructor(private router: Router) {}
  ngOnInit() {
    // Check the route on initialization
    this.checkRoute(this.router.url);

    // Subscribe to navigation events to check the route on every navigation change
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkRoute(event.urlAfterRedirects);
      }
    });
  }

  checkRoute(url: string) {
    // Check if the URL starts with /design-system
    this.showHeaderFooter = !url.startsWith('/design-system');
  }
}
