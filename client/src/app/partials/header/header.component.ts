import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user : User;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private auth:AuthService,
    private router:Router) { }

  ngOnInit(): void {
    this.user = new User();
  }

  onLogoutClick():void
  {
    this.auth.logout().subscribe(data=> {
      this.router.navigate(['/login']);
    });
  }

  isLoggedIn():boolean
  {
    const result = this.auth.authenticated;
    if (result)
    {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    return result;
  }
}
