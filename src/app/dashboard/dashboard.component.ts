import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, merge, of } from 'rxjs';
import { User } from 'src/data/userdata';
import { DashboardService } from './dashboard.service';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { HttpClient } from '@angular/common/http';
import * as data from 'src/data/data.json';
import { MatSelect } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    // userData$: User[] = (data as any).default; // 1. read data using import statement
    userData$: User[] = [];
    myControl = new FormControl();
    filteredOptions: Observable<User[]>;
    result: string[] = [];
    color="";

    @ViewChild(MatSelect ,{static:true}) matselect  : MatSelect
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getUserData().subscribe(res => {
     this.userData$ = res;
     this.filteredOptions = of(res);
    });
  }


  getselectedValue(event) {
    this.result = event.value;
    if(this.result.length == 0){
    this.color = ''
    }
  }

  remove(name) {
    this.result = this.result.filter(n => n != name);
  }

  changeColor(color) {
    this.color = ''
    this.color = color;
    
  }

  onInputChange(filterValue){
    filterValue = filterValue.toString().replace(/ +/g, '').toLowerCase(); // Remove whitespace
    this.filteredOptions = of (this.userData$.filter(
      p => p.name.replace(/ +/g, '').toLowerCase().indexOf(filterValue) !== -1));
  }
}
