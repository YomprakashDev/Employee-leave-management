import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Layout } from './pages/layout/layout';
import { Employee } from './pages/employee/employee';
import { Leave } from './pages/leave/leave';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login', component: Login
    },
    {
        path: 'dashboard', component: Layout,
        children: [
            { path: '', redirectTo: 'dashboard-home', pathMatch: 'full' },
            { path: 'dashboard-home', component: Dashboard },
            { path: 'employees', component: Employee },
            { path: 'leave', component: Leave },
        ]
    },

];
