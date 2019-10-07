import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    errorMessage = '';
    successMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  tryLogin(nf: NgForm) {
    this.authService.doLogin(nf.value)
        .then(res => {
            console.log(res);
            this.errorMessage = '';
            this.successMessage = 'Logging In!';
        }, err => {
            console.log(err);
            this.errorMessage = err.message;
            this.successMessage = '';
        });
}

}
