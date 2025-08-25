import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.Login)
    },
    {
        path: 'dashboard', loadComponent: () => import('./pages/layout/layout').then(m => m.Layout),
        children: [
            { path: '', redirectTo: 'dashboard-home', pathMatch: 'full' },
            { path: 'dashboard-home', loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard) },
            { path: 'employees', loadComponent: () => import('./pages/employee/employee').then(m => m.Employee) },
            { path: 'leave', loadComponent: () => import('./pages/leave/leave').then(m => m.Leave) },
        ]
    },

];
