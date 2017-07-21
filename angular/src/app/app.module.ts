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
import { DashboardView } from './views/dashboard/dashboard.view';
import { ProjectView } from './views/project/project.view';
import { ProgressView } from './views/progress/progress.view';
import { RequirementsView } from './views/requirements/requirements.view';
import { ResourcesView } from './views/resources/resources.view';
import { DiscussionView } from './views/discussion/discussion.view';

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
    DashboardView,
    ProjectView,
    ProgressView,
    RequirementsView,
    ResourcesView,
    DiscussionView,

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
