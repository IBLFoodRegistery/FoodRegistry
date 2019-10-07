import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Profile = new Profile('test', 1, 'test@email.com', 3, 0, 0);

  constructor(/*profile : Profile*/) { 
    //this.Profile = profile;
  }

  ngOnInit() {
  }

}
