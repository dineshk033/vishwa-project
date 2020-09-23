import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'auto-complete-search',
  templateUrl: './auto-complete-search.component.html',
  styleUrls: ['./auto-complete-search.component.scss']
})
export class AutoCompleteSearchComponent implements OnInit {
  categoriesOption:any[];
  search: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.categoriesOption = [
      {
        label:'All',
        value:''
      },
      {
        label:'Laptop',
        value:'laptop'
      },
      {
        label:'Laptop search',
        value:'laptops'
      }
    ];
    this.search = this.fb.group({
      category: [''],
      input:['']
    });
  }

}
