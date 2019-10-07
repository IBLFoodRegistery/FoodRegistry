import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userData: Observable<firebase.User>;

    constructor(private afAuth: AngularFireAuth) {
    }

    doLogin(value) {
        return new Promise<any>((resolve, reject) => {
            this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
                .then(res => {
                    resolve(res);
                }, err => reject(err));
        });
    }

    doRegister(value) {
        return new Promise<any>((resolve, reject) => {
            this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
                .then(res => {
                    resolve(res);
                }, err => reject(err))
        });
    }

    doGoogleLogin() {
        return new Promise<any>((resolve, reject) => {
            const provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            this.afAuth.auth
                .signInWithPopup(provider)
                .then(res => {
                    resolve(res);
                });
        });
    }
}
