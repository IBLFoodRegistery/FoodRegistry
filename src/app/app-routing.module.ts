// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// components
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

// Services



const routes: Routes = [
    { path: '', component: LandingComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, },
    { path: 'register', component: RegisterComponent, },
    { path: 'home', component: HomeComponent, },
    { path: 'verify-email', component: VerifyEmailComponent, },

];

@NgModule({
    imports: [RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
