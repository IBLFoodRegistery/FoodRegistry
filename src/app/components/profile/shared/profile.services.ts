import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Profile } from '../profile';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable()
export class ProfileService {
    selectedProfile: Profile;
    authService: AuthService;

    constructor(private http: HttpClient) {

    }


    getProfile(uid: string) {
      return this.http.get('http://localhost:3000/Users' + `/${uid}`);
    }

    postUser(newUser: any) {
        return this.http.post('http://localhost:3000/Users/addUser', newUser);
    }

}
