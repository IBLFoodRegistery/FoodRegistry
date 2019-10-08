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
        this.authService.doEmailSignUp(nf.value);
    }
}
