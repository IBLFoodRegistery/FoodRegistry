// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// components
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// Services
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
    { path: '', component: LandingComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent, },
    { path: 'register', component: RegisterComponent, },

];

@NgModule({
    imports: [RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
