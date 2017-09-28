import { Component, OnInit } from '@angular/core';
import { Form } from './form'
import { FormService } from './form.service';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {
  forms: Array<Form> = [
    //new Form(1, "form1"),
    //new Form(2, "form2"),
   // new Form(3, "form3"),
  ];

  create(form: Form){
    this.forms.push(form);
  }

  destroy(form: Form){
    
    const i = this.forms.indexOf(form);
    console.log(i);
    this.forms.splice(i, 1);

  }
  
  constructor(private _formService: FormService) {
    console.log('Admin Main Component');
    this.getforms();
    console.log(this.forms);
   }

  ngOnInit() {
    //this.getforms();
  }

  getforms() {
    this._formService.getforms()
    .then( forms => {this.forms = forms;}
      )
    .catch(err => console.log("Error Data did not come to Admin-Main Module"));
    
  }

}
