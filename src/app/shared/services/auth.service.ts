import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FirebaseAuth } from '@angular/fire';
import { Profile } from 'src/app/components/profile/profile';
import { ProfileService } from 'src/app/components/profile/shared/profile.services';



class User {
    role?: string;
    userName: string;
    email: string;
    uid: string;

    constructor(role: string, userName: string, email: string, uid: string) {
        this.role = role;
        this.userName = userName;
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
        private router: Router,
        private profileService : ProfileService) {
        this.subscribeUser();
    }

    /*
        initialize userData with data from a user's corresponding firestore document.
        
        Does subscribing to auth state allow for user data to change when the firestore document changes
         during the user session? If not, use getCurrentuser() to update userData instead
    */
    private subscribeUser() {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.afStore.collection('users').doc(user.uid).ref.get().then(document => {
                    let data = document.data();
                    this.userData = new User(data.role, data.userName, data.email, data.uid);
                });
            } else {
                console.log('you were logged out');
                this.userData = null;
            }
        });
    }

    /*
        Use to validate if a user is logged in
    */
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
            role: value.userRole,
            userName: value.userName,
            email: value.userEmail,
            uid: res.user.uid,
        };

        userRef.set(data, { merge: true }).then(res2 => {
            this.addtoMongo(data)
        });
    }

    addtoMongo(data: any){
        let selectedProfile = new Profile(data.uid, data.userName, data.role, data.email, "", "", "");
        console.log(selectedProfile);

        this.profileService.postUser(selectedProfile).subscribe((res) => {
            console.log("saved successfully ");
          });
    }

    doSignOut() {
        this.afAuth.auth.signOut().then(() => {
            this.router.navigate(['/']);
        });
    }

    get currentUserObservable(): any {
        return this.afAuth.authState;
    }
}
