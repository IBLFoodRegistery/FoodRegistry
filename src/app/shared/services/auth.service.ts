import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { auth as firebaseAuth, } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Profile } from 'src/app/components/profile/profile';

=======
import { FirebaseAuth } from '@angular/fire';
>>>>>>> master



class User {
    role?: string;
    email: string;
    uid: string;

    constructor(role: string, email: string, uid: string){
        this.role = role;
        this.email = email;
        this.uid = uid;
    }
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
<<<<<<< HEAD
    userData: Observable<Profile>;
=======
    //userData: Observable<User>;
    userData: User;
    authState: FirebaseAuth;
>>>>>>> master

    constructor(private afAuth: AngularFireAuth,
        private afStore: AngularFirestore,
        private router: Router) {
<<<<<<< HEAD
        this.userData = this.afAuth.authState.pipe(
            switchMap(user => {
                if (user) {
                    return this.afStore.doc<Profile>(`users/${user.uid}`).valueChanges();
                } else {
                    return of(null);
                }
            })
        );
=======
>>>>>>> master
    }

    doLogin(value) {
        return new Promise<any>((resolve, reject) => {
            this.afAuth.auth.signInWithEmailAndPassword(value.userEmail, value.userPass)
                .then(res => {
                    this.subscribeUser();
                    resolve(res);
                }, err => reject(err));
        });
    }

    private subscribeUser(){
        this.afAuth.authState.subscribe(user => {
            if(user){
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

    doRegister(value) {
        return new Promise<any>((resolve, reject) => {

            this.afAuth.auth.createUserWithEmailAndPassword(value.userEmail, value.userPass)
                .then(res => {
                    this.addUserCollection(res, value);
                    resolve(res);
                }, err => reject(err));
        });
    }

    private addUserCollection(res, value){
        const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/`+ res.user.uid);

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

<<<<<<< HEAD
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
=======
>>>>>>> master
}
