import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { auth as firebaseAuth, } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


interface User {
    displayName?: string;
    email: string;
    uid: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userData: Observable<User>;

    constructor(private afAuth: AngularFireAuth,
        private afStore: AngularFirestore,
        private router: Router) {
        this.userData = this.afAuth.authState.pipe(
            switchMap(user => {
                if (user) {
                    return this.afStore.doc<User>(`users/${user.uid}`).valueChanges();
                } else {
                    return of(null);
                }
            })
        );
        console.log('testing construcotr');
        console.log(this.userData);
    }

    doLogin(value) {
        return new Promise<any>((resolve, reject) => {
            this.afAuth.auth.signInWithEmailAndPassword(value.userEmail, value.userPass)
                .then(res => {
                    resolve(res);
                }, err => reject(err));
        });
    }

    doRegister(value) {
        return new Promise<any>((resolve, reject) => {
            this.afAuth.auth.createUserWithEmailAndPassword(value.userEmail, value.userPass)
                .then(res => {
                    resolve(res);
                }, err => reject(err));
        });
    }

    doSignOut() {
        this.afAuth.auth.signOut();
    }

    // ---------------------------------
    // Social logins below
    // ---------------------------------
    doGoogleLogin() {
        return new Promise<any>((resolve, reject) => {
            const provider = new firebaseAuth.GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            this.afAuth.auth
                .signInWithPopup(provider)
                .then(res => {
                    resolve(res);
                });
        });
    }

    googleLogin() {
        const provider = new firebaseAuth.GoogleAuthProvider()
        return this.oAuthLogin(provider);
    }

    private oAuthLogin(provider) {
        return this.afAuth.auth.signInWithPopup(provider)
            .then((credential) => {
                this.updateUserData(credential.user);
            });
    }


    private updateUserData(user) {
        // Sets user data to firestore on login

        const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);

        const data: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
        };

        return userRef.set(data, { merge: true });

    }
}
