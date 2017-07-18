import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardView } from './views/dashboard/dashboard.view';

const routes: Routes = [
 	{ path: 'app', redirectTo: 'app/dashboard' },
	{ path: 'app/dashboard',  component: DashboardView},
 	
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);