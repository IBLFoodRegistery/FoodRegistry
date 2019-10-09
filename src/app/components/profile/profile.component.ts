import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';
import { ProfileService } from './shared/profile.services';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Profile = new Profile('test', 1, 'test@email.com', 3, 0, 0);
  user : any;
  userID : string;

  constructor(public auth: AuthService) { 
  
  }

  ngOnInit() {
   // this.loadProfile();
    this.user = this.auth.userData;
    this.userID = this.user.uid;
  }

  // loadProfile() {
  //   this.profileService.getProfileList().subscribe((res) => {
  //     this.profileService.selectedProfile = res as Profile;
      
  //   });
 // }
}
