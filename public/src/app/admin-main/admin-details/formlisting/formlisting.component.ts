import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Form } from '../.././form'

@Component({
  selector: 'app-formlisting',
  templateUrl: './formlisting.component.html',
  styleUrls: ['./formlisting.component.css']
})
export class FormlistingComponent implements OnInit {
  @Input() forms;
  @Output() editFormEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  editForm(form: Form){
    this.editFormEvent.emit(form)

  }
}
