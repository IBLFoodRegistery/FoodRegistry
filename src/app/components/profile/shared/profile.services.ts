import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';


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

  postUser(newUser: any){
    this.selectedProfile.uid =  this.authService.userData.uid;
    this.selectedProfile.displayName = newUser.userName;
    this.selectedProfile.email = newUser.userEmail;
    this.selectedProfile.role = newUser.userRole;
    return this.http.post('http://localhost:3000/Users/addUser', this.selectedProfile);
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
