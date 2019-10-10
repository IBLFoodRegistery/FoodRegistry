// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { SubscriberComponent } from './components/subscriber/subscriber.component';

// Services


const routes: Routes = [
    { path: '', component: LandingComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, },
    { path: 'register', component: RegisterComponent, },
    { path: 'home', component: HomeComponent, },
    { path: '**', redirectTo: ''},
   // {path:'', component:LoginComponent},
    {path:'admin', component:AdminComponent},
    {path:'subscriber', component:SubscriberComponent}    

];

@NgModule({
    imports: [RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
