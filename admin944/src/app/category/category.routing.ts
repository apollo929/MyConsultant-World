import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryCreateComponent } from './create/create.component';
import { CategoryListingComponent } from './list/list.component';
import { CategoryUpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: 'list',
    component: CategoryListingComponent,
    data: {
      title: 'Job-Skills Manager',
      urls: [{ title: 'Job-Skill', url: '/categories/list' }, { title: 'Listing' }]
    }
  },
  {
    path: 'update/:id',
    component: CategoryUpdateComponent,
    data: {
      title: 'Job-Skill Update',
      urls: [{ title: 'Job-Skill', url: '/categories/list' }, { title: 'Update' }]
    }
  },
  {
    path: 'create',
    component: CategoryCreateComponent,
    data: {
      title: 'Create New Job-Skill',
      urls: [{ title: 'Job-Skill', url: '/categories/list' }, { title: 'Create' }]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
