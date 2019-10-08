// Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// Services
import { AuthService } from './shared/services/auth.service';

// Constants
import { environment } from 'src/environments/environment';
import { LandingComponent } from './components/landing/landing.component';
import { CarepackageComponent } from './components/carepackage/carepackage.component';



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LoginComponent,
        RegisterComponent,
        LandingComponent,
        CarepackageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,     // imports firebase/firestore, only needed for database features
        AngularFireAuthModule,      // imports firebase/auth, only needed for auth features
    ],

    providers: [AuthService,],
    bootstrap: [AppComponent]
})
export class AppModule { }
