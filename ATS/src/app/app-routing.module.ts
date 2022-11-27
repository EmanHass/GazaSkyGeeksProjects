import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'users',
    pathMatch:'full'
  },
  {
    path: 'jobseekers',
    loadChildren: () => import('./jobseekers/jobseekers.module').then(m => m.JobseekersModule)
  },
  {
    path:'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },{
    path:'jobs',
    loadChildren: ()=> import('./jobs/jobs.module').then(m=>m.JobsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }