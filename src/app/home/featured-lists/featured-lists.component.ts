// src/app/home/featured-lists/featured-lists.component.ts

import { Component, OnInit } from '@angular/core';
import { ListsService, List } from '../../services/lists.service';

@Component({
  selector: 'app-featured-lists',
  templateUrl: './featured-lists.component.html',
  styleUrls: ['./featured-lists.component.css']
})
export class FeaturedListsComponent implements OnInit {
  featuredLists: List[] = [];

  constructor(private listsService: ListsService) {}

  ngOnInit(): void {
    this.getFeaturedLists();
  }

  getFeaturedLists() {
    this.listsService.getFeaturedLists().subscribe(
      lists => this.featuredLists = lists,
      error => console.error('Error fetching featured lists:', error)
    );
  }
}
