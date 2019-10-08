import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(public auth: AuthService, private router: Router) { }

    ngOnInit() {
    }

    trySignOut() {
        this.auth.doSignOut().then(() => {
            this.router.navigate(['']);
        });

    }

}
