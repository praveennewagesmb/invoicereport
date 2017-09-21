import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Form} from '.././form';

@Component({
  selector: 'app-admin-listing',
  templateUrl: './admin-listing.component.html',
  styleUrls: ['./admin-listing.component.css']
})
export class AdminListingComponent implements OnInit {
  @Input() forms;
  @Output() destroyFormEvent = new EventEmitter();
  constructor() {
    console.log('Listing Component')
   }

   destroy(form: Form){
      console.log(form)
      this.destroyFormEvent.emit(form);
   }

  ngOnInit() {
  }

}
