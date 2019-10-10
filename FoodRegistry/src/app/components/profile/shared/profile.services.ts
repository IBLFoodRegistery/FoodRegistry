import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';


import { Profile } from '../profile';

@Injectable()
export class ProfileService {
  selectedProfile: Profile;
  readonly baseURL = 'http://localhost:3000/profiles';

  constructor(private http: HttpClient) { }

  getProfileList() {
    return this.http.get(this.baseURL);
  }
/*
  postEmployee(pro: Profile) {
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