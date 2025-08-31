import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Students } from './components/students/students';
import { StudentDetails} from './components/student-details/student-details';
import { PageNotFound } from './components/page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'students', component: Students },
  { path: 'students/:id', component: StudentDetails },
  { path: '**', component: PageNotFound } // must be last
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }