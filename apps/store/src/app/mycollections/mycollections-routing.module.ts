import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MycollectionItemComponent } from './mycollection-item/mycollection-item.component';

const routes: Routes = [
  {
    path: '',
    component: MycollectionItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycollectionsRoutingModule {}
