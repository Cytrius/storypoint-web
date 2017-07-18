import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing
import { routing }     from './app.routes';

// Views
import { AppComponent } from './app.component';
import { DashboardView } from './views/dashboard/dashboard.view';

// Component
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProjectCardsComponent } from './components/project-cards/project-cards.component';

@NgModule({
  declarations: [
    // Views
    AppComponent,
    DashboardView,
    // Components
    HeaderComponent,
    SidebarComponent,
    ProjectCardsComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
