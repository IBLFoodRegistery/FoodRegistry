// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';

import { ErrorComponent } from './components/error/error.component';

// Services
import { AuthGuard } from './shared/services/auth.guard';


const routes: Routes = [
    { path: '', component: LandingComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, },
    { path: 'register', component: RegisterComponent, },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'error', component: ErrorComponent },
    { path: 'profile', component: ProfileComponent},
    { path: '**', redirectTo: ''},

];

@NgModule({
    imports: [RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
    providers: [AuthGuard],
})
export class AppRoutingModule { }
