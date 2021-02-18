import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogOut(): void {
    this.authService.logOut();
    this.router.navigateByUrl('');
  }
}
