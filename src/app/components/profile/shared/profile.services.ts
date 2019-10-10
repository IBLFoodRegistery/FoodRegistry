import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Profile } from '../profile';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable()
export class ProfileService {
    selectedProfile: Profile;
    authService: AuthService;

    readonly baseURL = 'http://localhost:3000/profiles';

    constructor(private http: HttpClient) {

    }


    getProfileList() {
        return this.http.get(this.baseURL);
    }

    postUser(newUser: any) {
        return this.http.post('http://localhost:3000/Users/addUser', newUser);
    }
    /*
      postUser(pro: Profile) {
        return this.http.post(this.baseURL, pro);
      }

      putEmployee(pro: Profile) {
        return this.http.put(this.baseURL + `/${pro._id}`, pro);
      }

      deleteEmployee(_id: string) {
        return this.http.delete(this.baseURL + `/${_id}`);
      }
    */
}
