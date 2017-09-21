import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Form } from '../.././form'

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {
  newform = new Form();
  @Input() formToEdit: Form;
  formEdit: Form = new Form();
  @Output() createNewFormEvent = new EventEmitter();

  favoriteSeason: string;

  create(){
    //call the server to save and clear the object
    
    console.log(this.newform);
    this.createNewFormEvent.emit(this.newform);
    console.log(this.newform);
    this.newform = new Form();
    console.log('form submission');
    console.log(this.newform);
    


  }

  seasons = [
    'TextBox',
    'TextBox - Numbers only',
    'Date & Time',
    'Date Only',
    'Time Only',
    'Phone',
    'EMail',
    'Multiline'
  ];
    seasons1 = [
    'Half Size',
    'Full Sie'
  ];
    seasons2 = [
    'Single Selection',
    'Multiple Selection'
  ];

  constructor() { 
    console.log('Creator Component');
  }

  ngOnInit() {
    console.log('Creater');
    console.log(this.formToEdit);
    Object.assign(this.formEdit, this.formToEdit);
    console.log('after assign')
    console.log(this.formEdit)
  }

}
