import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Form } from './form'
import "rxjs";
import { Observable } from "rxjs";
@Injectable()
export class FormService {

  constructor(private _http: Http) { }

   getforms(){
    return this._http.get("/api/forms/")
    .map(data => data.json()).toPromise();
  }

  create(form: Form){
    return this._http.post("/forms", form)
    .map(data => data.json()).toPromise();
  }

  destroy(form: Form){
    return this._http.put("/forms/"+form._id, form)
    .map(data => data.json()).toPromise();
  }

  update(form: Form){
    return this._http.delete("/forms/"+form._id)
    .map(data => data.json()).toPromise();
  }

 

  getform(form: Form){
    return this._http.get("/forms/"+form._id)
    .map(data => data.json()).toPromise();
  }

}
