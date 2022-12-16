import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/model/auth.service';
@Component({
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {

  public user:User;
  public errorMessage:string;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private router: Router,
              private authService: AuthService) { }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
    this.user = new User();
  }

  authenticate(form: NgForm){
    if(form.valid){
      // perform authentication
      this.authService.authenticate(this.user).subscribe(data=>{
        if(data.success)
        {
          this.authService.storeUserData(data.token, data.user);
          this.router.navigateByUrl("admin/main");
        }
      });
    }
    else
    {
      this.errorMessage = "Form Data Invalid";
    }
  }
}
