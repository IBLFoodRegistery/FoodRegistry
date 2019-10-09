import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FirebaseAuth } from '@angular/fire';



class User {
    role?: string;
    email: string;
    uid: string;

    constructor(role: string, email: string, uid: string) {
        this.role = role;
        this.email = email;
        this.uid = uid;
    }
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    //userData: Observable<User>;
    userData: User = null;
    authState: FirebaseAuth;

    constructor(private afAuth: AngularFireAuth,
        private afStore: AngularFirestore,
        private router: Router) {
        this.subscribeUser();
    }

    private subscribeUser() {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.afStore.collection('users').doc(user.uid).ref.get().then(document => {
                    let data = document.data();
                    this.userData = new User(data.role, data.email, data.uid);
                })
            } else {
                console.log('you were logged out');
                this.userData = null;
            }
        });
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
                    this.addUserCollection(res, value);
                    resolve(res);
                }, err => reject(err));
        });
    }

    private addUserCollection(res, value) {
        const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/` + res.user.uid);

        const data = {
            uid: res.user.uid,
            email: value.userEmail,
            role: value.userRole,
        };

        userRef.set(data, { merge: true });
    }

    doSignOut() {
        this.afAuth.auth.signOut().then(() => {
            this.router.navigate(['/']);
        });
    }

    getCurrentUser() {
        return new Promise<any>((resolve, reject) => {
            let user = this.afAuth.auth.onAuthStateChanged((user) => {
                if (user) {
                    resolve(user);
                } else {
                    reject('No user logged in');
                }
            });
        });
    }

    get currentUserObservable(): any {
        return this.afAuth.authState;
    }
}
