import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardView } from './views/dashboard/dashboard.view';
import { ProjectView } from './views/project/project.view';
import { ProgressView } from './views/progress/progress.view';
import { RequirementsView } from './views/requirements/requirements.view';
import { ResourcesView } from './views/resources/resources.view';
import { DiscussionView } from './views/discussion/discussion.view';

const routes: Routes = [
 	{ path: 'app', redirectTo: 'app/dashboard' },
	{ path: 'app/dashboard',  component: DashboardView},
	{ path: 'app/project', component: ProjectView},
	{ path: 'app/progress', component: ProgressView},
	{ path: 'app/requirements', component: RequirementsView},
	{ path: 'app/resources', component: ResourcesView},
	{ path: 'app/discussion', component: DiscussionView}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);