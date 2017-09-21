import { Component, OnInit } from '@angular/core';
import { Form } from '.././form';
import { FormService } from '.././form.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {
    forms: Array<Form> = [
    //new Form(4, "form4"),
    //new Form(5, "form5"),
    //new Form(6, "form6"),
  ];
    formToEdit = new Form();
    
  constructor(private _formService: FormService) { 
    console.log('Admin Details Component')
    this.getforms();
    console.log(this.forms);
  }

  ngOnInit() {
    console.log('Admin Details Component - ngOnInit')
  }

  create(form: Form){
    this.forms.push(form);
    console.log(this.forms);
  }
 
  editForm(form: Form){
    this.formToEdit = form;
    console.log(this.formToEdit);
    console.log('admin-details');
  }
  getforms() {
    this._formService.getforms()
    .then( forms => this.forms = forms)
    .catch(err => console.log("err"));
  }

}
