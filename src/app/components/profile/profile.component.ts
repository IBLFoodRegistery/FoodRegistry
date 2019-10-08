import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';
import { ProfileService } from './shared/profile.services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Profile = new Profile('test', 1, 'test@email.com', 3, 0, 0);

  constructor(private profileService : ProfileService) { 

  }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.profileService.getProfileList().subscribe((res) => {
      this.profileService.selectedProfile = res as Profile;
      
    });
  }
}
