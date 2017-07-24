import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsView } from './views/projects/projects.view';
import { OverviewView } from './views/overview/overview.view';
import { ProgressView } from './views/progress/progress.view';
import { RequirementsView } from './views/requirements/requirements.view';
import { ResourcesView } from './views/resources/resources.view';
import { DiscussionView } from './views/discussion/discussion.view';
import { BudgetsView } from './views/budgets/budgets.view';
import { BugsView } from './views/bugs/bugs.view';
import { FeedbackView } from './views/feedback/feedback.view';
import { PersonalView } from './views/personal/personal.view';
import { ReportsView } from './views/reports/reports.view';
import { SettingsView } from './views/settings/settings.view';
import { SprintsView } from './views/sprints/sprints.view';
import { TeamView } from './views/team/team.view';

const routes: Routes = [
 	{ path: 'app', redirectTo: 'app/projects/overview' },
 	{ path: 'app/personal',  component: PersonalView},
 	{ path: 'app/projects', children:[
		{ path: '',  component: ProjectsView},
		{ path: 'overview', component: OverviewView},
		{ path: 'progress', component: ProgressView},
		{ path: 'requirements', component: RequirementsView},
		{ path: 'resources', component: ResourcesView},
		{ path: 'discussion', component: DiscussionView},
		{ path: 'sprints', component: SprintsView},
		{ path: 'team', component: TeamView},
		{ path: 'budgets', component: BudgetsView}
 	]},
 	{ path: 'app/feedback',  component: FeedbackView},
 	{ path: 'app/bugs',  component: BugsView},
 	{ path: 'app/reports',  component: ReportsView},
 	{ path: 'app/settings',  component: SettingsView},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);