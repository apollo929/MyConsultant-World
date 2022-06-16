import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradeCreateComponent } from './create/create.component';
import { GradeListingComponent } from './list/listing.component';
import { GradeUpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: 'list',
    component: GradeListingComponent,
    data: {
      title: 'Job-Type Manager',
      urls: [{ title: 'Job-Type', url: '/grades/list' }, { title: 'Listing' }]
    }
  },
  {
    path: 'update/:id',
    component: GradeUpdateComponent,
    data: {
      title: 'Job-Type Update',
      urls: [{ title: 'Job-Type', url: '/grades/list' }, { title: 'Update' }]
    }
  },
  {
    path: 'create',
    component: GradeCreateComponent,
    data: {
      title: 'Create New Job-Type',
      urls: [{ title: 'Job-Type', url: '/grades/list' }, { title: 'Create' }]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradeRoutingModule { }
