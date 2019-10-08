import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    errorMessage = '';
    successMessage = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  tryLogin(nf: NgForm) {
    this.auth.doLogin(nf.value.userEmail, nf.value.userPass)
        .then(res => {
            console.log(res);
            this.errorMessage = '';
            this.successMessage = 'Logging In!';
            this.router.navigate(['/home']);
        }, err => {
            console.log(err);
            this.errorMessage = err.message;
            this.successMessage = '';
        });
}

}
