import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardView } from './views/dashboard/dashboard.view';
import { ProjectView } from './views/project/project.view';
import { ProgressView } from './views/progress/progress.view';
import { RequirementsView } from './views/requirements/requirements.view';
import { ResourcesView } from './views/resources/resources.view';
import { DiscussionView } from './views/discussion/discussion.view';

const routes: Routes = [
 	{ path: 'app', redirectTo: 'app/projects/dashboard' },
 	{ path: 'app/projects', children:[
 		{ path: '',  redirectTo: 'dashboard', pathMatch: 'full'},
		{ path: 'dashboard',  component: DashboardView},
		{ path: 'overview', component: ProjectView},
		{ path: 'progress', component: ProgressView},
		{ path: 'requirements', component: RequirementsView},
		{ path: 'resources', component: ResourcesView},
		{ path: 'discussion', component: DiscussionView}
 	]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);