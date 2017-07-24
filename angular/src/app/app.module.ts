import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { ChartsModule } from 'ng2-charts/ng2-charts';

// Routing
import { routing }     from './app.routes';

// Entry
import { AppComponent } from './app.component';

// Views
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

// Component
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProjectCardsComponent } from './components/project-cards/project-cards.component';
import { ProjectHeaderComponent } from './components/project-header/project-header.component';

@NgModule({
  declarations: [
    // Entry
    AppComponent,
    
    // Views
    ProjectsView,
    OverviewView,
    ProgressView,
    RequirementsView,
    ResourcesView,
    DiscussionView,
    BudgetsView,
    BugsView,
    FeedbackView,
    PersonalView,
    ReportsView,
    SettingsView,
    SprintsView,
    TeamView,

    // Components
    HeaderComponent,
    SidebarComponent,
    ProjectCardsComponent,
    ProjectHeaderComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
