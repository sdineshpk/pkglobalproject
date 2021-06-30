import { Component, OnInit } from '@angular/core';
import { CollectionModule } from '../collection/collection.model';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'pkglobal-app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.scss'],
})
export class CollectionDetailsComponent implements OnInit {
  collections: CollectionModule[] = [];

  constructor(private mycollectionService: CollectionService) {}
  ngOnInit(): void {
    this.collections = this.mycollectionService.getCollections();
  }
}
