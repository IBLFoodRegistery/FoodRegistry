// Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingComponent } from './components/landing/landing.component';
import { CarepackageComponent } from './components/carepackage/carepackage.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { SubscriberComponent } from './components/subscriber/subscriber.component';

// Services
import { AuthService } from './shared/services/auth.service';
import { ProfileService } from './components/profile/shared/profile.services';

// Constants
import { environment } from 'src/environments/environment';







@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LoginComponent,
        RegisterComponent,
        LandingComponent,
        ProfileComponent,
        CarepackageComponent,
        HomeComponent,
        ErrorComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,     // imports firebase/firestore, use for firestore cloud
        AngularFireAuthModule,      // imports firebase/auth, only needed for auth features
        HttpClientModule
    ],

    providers: [AuthService, ProfileService, HttpClient],
    bootstrap: [AppComponent]
})
export class AppModule { }
