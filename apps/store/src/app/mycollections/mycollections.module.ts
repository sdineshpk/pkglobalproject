import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycollectionItemComponent } from './mycollection-item/mycollection-item.component';
import { MaterialModule } from '../material/material.module';
import { MycollectionsRoutingModule } from './mycollections-routing.module';

@NgModule({
  declarations: [MycollectionItemComponent],
  imports: [CommonModule, MaterialModule, MycollectionsRoutingModule],
  exports: [MycollectionItemComponent],
})
export class MycollectionsModule {}
