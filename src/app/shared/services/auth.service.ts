import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { auth as firebaseAuth, User } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    authToken: any;
    userData: User;

    constructor(private afAuth: AngularFireAuth,
                private afStore: AngularFirestore,
                private router: Router) {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
            } else {
                localStorage.setItem('user', null);
            }
        })
    }

    async doEmailSignUp(email: string, password: string) {
        let result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
        this.sendEmailVerification();
    }

    async doLogin(email: string, password: string) {
        let result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
        this.router.navigate(['/home']);
    }

    async sendEmailVerification() {
        await this.afAuth.auth.currentUser.sendEmailVerification()
        this.router.navigate(['/verify-email']);
    }
}
