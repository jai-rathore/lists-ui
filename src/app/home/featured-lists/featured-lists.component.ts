// src/app/home/featured-lists/featured-lists.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { ListsService, List } from '../../services/lists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-lists',
  templateUrl: './featured-lists.component.html',
  styleUrls: ['./featured-lists.component.css']
})
export class FeaturedListsComponent implements OnInit {
  @Input() featuredLists: List[] = [];

  constructor(private listsService: ListsService, private router:  Router) {}

  ngOnInit(): void {
    this.getFeaturedLists();
  }

  getFeaturedLists() {
    this.listsService.getFeaturedLists().subscribe(
      lists => this.featuredLists = lists,
      error => console.error('Error fetching featured lists:', error)
    );
  }

  goToListDetail(listId: number) {
    this.router.navigate(['/list-detail', listId]);
  }
}
