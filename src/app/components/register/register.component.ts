import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

import { NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../profile/shared/profile.services';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    errorMessage = '';
    roles = ["Admin", "Subscriber"];

    constructor(private authService: AuthService, private router: Router, private profileService: ProfileService) { }

    ngOnInit() {
    }

    tryRegister(nf: NgForm) {
        this.authService.doRegister(nf.value)
            .then(res => {
                this.profileService.postUser(nf.value).subscribe((res) => {
                    console.log("saved successfully ");
                  });
                this.router.navigate(['/login']);
            }, err => {
                this.errorMessage = err.message;
            });
    }
}
