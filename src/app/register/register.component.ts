import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }
  genders=['male','female','others'];

  ngOnInit() {
  }
  onSubmit(userDetails)
  {
    this.httpClient.post('person/post',userDetails).subscribe(value=>{
      alert(value["message"])
    })
    
  }
}
