import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Faq } from './pages/faq/faq';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

export const routes: Routes = [

    { path: '', component: Home},
    { path: 'login', component: Login},
    { path: 'cadastro', component: Register},
    { path: 'faq', component: Faq},
];
