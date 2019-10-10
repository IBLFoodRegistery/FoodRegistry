import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Care } from './care.model';

@Injectable({
  providedIn: 'root'
})
export class CareService {

  selectedCare: Care;
  cares: Care[];
  readonly baseURL = 'http://localhost:7000/cares';


  constructor(private http: HttpClient) { }
  postCare(care: Care) {
    return this.http.post(this.baseURL, care);
  }

  getCareList() {
    return this.http.get(this.baseURL);
  }

  putCare(care: Care) {
    return this.http.put(this.baseURL + `/${care._id}`, care);
  }

  deleteCare(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }



}
