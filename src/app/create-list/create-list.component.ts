import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ListsService, List, ListDetails } from '../services/lists.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {
  createListForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private listsService: ListsService
  ) {
    this.createListForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      public: [false],
      listItems: this.fb.array([])
    });
  }

  get listItems() {
    return this.createListForm.get('listItems') as FormArray;
  }

  addListItem() {
    this.listItems.push(this.fb.control(''));
  }

  removeListItem(index: number) {
    this.listItems.removeAt(index);
  }

  async onSubmit() {
    if (this.createListForm.valid) {
      const formData = this.createListForm.value;

      const payload: List = {
        listDetails: {
          description: formData.description,
          isPublic: formData.public,
          title: formData.name,
          userId: 1 // Replace this with the actual user ID from the authentication
        },
        listItems: formData.listItems.map((item: string) => ({ content: item }))
      };

      try {
        await this.listsService.createList(payload).toPromise();
        this.router.navigate(['/']);
      } catch (error) {
        console.error('Error creating list:', error);
      }
    }
  }

  ngOnInit(): void {}
}