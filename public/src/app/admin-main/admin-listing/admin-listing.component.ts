import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Form} from '.././form';
import {emp} from '.././form';
import { FormService } from '.././form.service'

@Component({
  selector: 'app-admin-listing',
  templateUrl: './admin-listing.component.html',
  styleUrls: ['./admin-listing.component.css']
})
export class AdminListingComponent implements OnInit {
  @Input() forms;
  @Output() destroyFormEvent = new EventEmitter();
  emps: Array<emp>;
  emp: emp;
  constructor(private _formService: FormService) {
    console.log('Listing Component')
    this.getemps();
   }

   destroy(form: Form){
      console.log(form)
      this.destroyFormEvent.emit(form);
   }

   empdetails(e){
     console.log(e)
    this._formService.getemp(e)
    .then(emp=>this.emp=emp)
    .catch(err=> console.log("Details not found"));
    console.log("Got the details back",this.emp)
   }

  ngOnInit() {
  }
  getemps() {
    this._formService.getemps()
    .then( emps => {
      this.emps = emps;
      this.emps.forEach(emp => {
        emp.ctcDetails.forEach(ctcDetails => {
          console.log("Values",emp.empName, ctcDetails.salary);
        });
        
      });
      

    })
    .catch(err => console.log("err can fetch data from Service"));
    
  }

}
