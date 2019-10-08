import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    errorMessage = '';
    successMessage = '';

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {
    }

    tryRegister(nf: NgForm) {
        this.authService.doRegister(nf.value)
            .then(res => {
                console.log(res);
                this.errorMessage = '';
                this.successMessage = 'Your account has been created';
                this.router.navigate(['/login']);
            }, err => {
                console.log(err);
                this.errorMessage = err.message;
                this.successMessage = '';
            });
    }
}
