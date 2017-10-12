import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { emp } from '../.././form';
import { Form } from '../.././form';
import { FormService } from '../.././form.service'

@Component({
  selector: 'app-formlisting',
  templateUrl: './formlisting.component.html',
  styleUrls: ['./formlisting.component.css']
})
export class FormlistingComponent implements OnInit {
  @Input() forms;
  @Output() editFormEvent = new EventEmitter();
  emps: Array<emp>;
  constructor(private _formService: FormService) { }

  ngOnInit() {
  }
  editForm(form: Form){
    this.editFormEvent.emit(form)

  }
    getemps() {
    this._formService.getemps()
    .then( emps => this.emps = emps)
    .catch(err => console.log("err"));
    console.log(this.emps);
  }
}
