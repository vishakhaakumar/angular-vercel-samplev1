import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
/*import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';*/
import {SearchService} from "./search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  employee = {id: '', firstName: '', lastName: ''};
  results: any[] =[];
  queryField: FormControl = new FormControl();
  constructor(private _searchService: SearchService) { }

  ngOnInit(): void {
    //this.queryField.valueChanges.subscribe( result => console.log(result));
    this.queryField.valueChanges
      .subscribe(queryField =>this._searchService.search(queryField)
        .subscribe(response => {console.log('response val ->', response)
                      for(let i=0;i<response.length;i++) {
                        this.results[i] = response[i].name;
                      }
          console.log('results val ->', this.results);
        }));
    }
}
