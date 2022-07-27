import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
details=[]
genders=['male','female','others'];

  constructor(private ds:DataService) { }

  ngOnInit() {
    this.ds.details().subscribe(value=>{
      this.details=value['data']
      
    })
  }

  delete(details)
  {
    console.log(details)
    this.ds.deieteDetails(details).subscribe(value1=>{
      this.details=value1['data']
    })
  }

  edit(Details)
  {
    console.log(Details)
    this.ds.editDetails(Details).subscribe(value2=>{
      this.details=value2['data']
    })
  }
}
