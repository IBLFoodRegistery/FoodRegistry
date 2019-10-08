import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { auth as firebaseAuth, User } from 'firebase/app';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class userModel{
    email: string;
    uid: string;
    role: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    authToken: any;
    userData: User;

    constructor(private afAuth: AngularFireAuth,
                private http: HttpClient,
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

    async doEmailSignUp(value: any) {
        await this.afAuth.auth.createUserWithEmailAndPassword(value.userEmail, value.userPass).then((user) => {
            this.http.post('https://ilp-food-registry.firebaseio.com/', user).subscribe( myData => {
                console.log('user added to db');
            });
        });
        this.router.navigate(['/verify-email']);
    }

    async doLogin(email: string, password: string) {
        let result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
        this.router.navigate(['/home']);
    }

    async doSignOut(){
        this.afAuth.auth.signOut().then( () => {
            this.userData = null;
        });
    }

}
