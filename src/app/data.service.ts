import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
details():Observable<any>
{
return this.http.get<any>('person/details')
}

deieteDetails(value):Observable<any>
{
  console.log(value)
 return this.http.delete<any>(`/person/delete/${value.name}`)
}

editDetails(update):Observable<any>
  {
    console.log(update)
   return this.http.put<any>('/person/editDet',update)
  }
}
