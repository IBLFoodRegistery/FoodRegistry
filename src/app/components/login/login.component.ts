import { Component, OnInit, Input } from '@angular/core';
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
    adminselect:Boolean=false
  subselect:Boolean=false
  options=['admin', 'subscriber']
  @Input()
  username:string
  @Input()
  password:string
  @Input()
  admin:string
  @Input()
  Subscriber:string

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  tryLogin(nf: NgForm) {
    this.auth.doLogin(nf.value)
        .then(res => {
          
            console.log(res);
            this.errorMessage = '';
            this.successMessage = 'Logging In!';
            this.router.navigate(['/landing']);
         
        }, err => {
            console.log(err);
            this.errorMessage = err.message;
            this.successMessage = '';
        });
}

    
  }

