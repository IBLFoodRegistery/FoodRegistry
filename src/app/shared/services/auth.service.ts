import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { auth as firebaseAuth, } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Profile } from 'src/app/components/profile/profile';



interface User {
    displayName?: string;
    email: string;
    uid: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userData: Observable<Profile>;

    constructor(private afAuth: AngularFireAuth,
        private afStore: AngularFirestore,
        private router: Router) {
        this.userData = this.afAuth.authState.pipe(
            switchMap(user => {
                if (user) {
                    return this.afStore.doc<Profile>(`users/${user.uid}`).valueChanges();
                } else {
                    return of(null);
                }
            })
        );
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
        this.afAuth.auth.signOut().then(() => {
            this.router.navigate(['/']);
        });
    }

    // ---------------------------------
    // Social logins below
    // ---------------------------------
    // doGoogleLogin() {
    //     return new Promise<any>((resolve, reject) => {
    //         const provider = new firebaseAuth.GoogleAuthProvider();
    //         provider.addScope('profile');
    //         provider.addScope('email');
    //         this.afAuth.auth
    //             .signInWithPopup(provider)
    //             .then(res => {
    //                 resolve(res);
    //             });
    //     });
    // }

    doGoogleLogin() {
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

        const data: Profile = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            familyMembers: user.familyMembers,
            carePackage: user.carePackage,
            foodPackage: user.foodPackage
        };

        return userRef.set(data, { merge: true });

    }
}
