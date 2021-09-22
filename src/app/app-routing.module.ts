import { MessagesComponent } from './components/admin/messages/messages.component';
import { EducationAddComponent } from './components/admin/education-add/education-add.component';
import { ExperienceAddComponent } from './components/admin/experience-add/experience-add.component';
import { AboutMeAddComponent } from './components/admin/about-me-add/about-me-add.component';
import { AdminGuard } from './guards/admin.guard';
import { SkillAddComponent } from './components/admin/skill-add/skill-add.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectAddComponent } from './components/admin/project-add/project-add.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'skill/add',
    component: SkillAddComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'project/add',
    component: ProjectAddComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'about-me/add',
    component: AboutMeAddComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'experience/add',
    component: ExperienceAddComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'education/add',
    component: EducationAddComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'messages',
    component: MessagesComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
