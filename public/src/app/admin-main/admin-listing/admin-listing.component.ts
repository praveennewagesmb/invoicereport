import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Form} from '.././form';
import { FormService } from '.././form.service'

@Component({
  selector: 'app-admin-listing',
  templateUrl: './admin-listing.component.html',
  styleUrls: ['./admin-listing.component.css']
})
export class AdminListingComponent implements OnInit {
  @Input() forms;
  @Output() destroyFormEvent = new EventEmitter();
  emps: Array<Form>;
  constructor(private _formService: FormService) {
    console.log('Listing Component')
    this.getemps();
   }

   destroy(form: Form){
      console.log(form)
      this.destroyFormEvent.emit(form);
   }

  ngOnInit() {
  }
  getemps() {
    this._formService.getemps()
    .then( emps => this.emps = emps)
    .catch(err => console.log("err"));
  }

}
