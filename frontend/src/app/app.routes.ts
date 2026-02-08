import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Faq } from './pages/faq/faq';

export const routes: Routes = [

    { path: '', component: Home},
    { path: 'faq', component: Faq},
];
