import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutSectionComponent } from './about-section/about-section.component';
import { EducationSectionComponent } from './education-section/education-section.component';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'about', component:AboutSectionComponent },
  { path: 'education', component: EducationSectionComponent },
  { path: 'experience', component:ExperienceSectionComponent },
  { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
