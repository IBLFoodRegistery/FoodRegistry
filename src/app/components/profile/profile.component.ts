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
    profile : Profile;
    private user: any;
    userID: string;
    currentUser : any;

    constructor(private auth: AuthService, private profileService: ProfileService) {

    }

    ngOnInit() {
      this.auth.getCurrentUser().then(user =>{
        this.loadProfile(user);
      })
    }

    loadProfile(user) {
      this.profileService.getProfile(user.uid).subscribe((res) => {
      this.profile = res as Profile;
      console.log(this.profile);

      });
    }
}
