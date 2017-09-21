import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-footer',
  templateUrl: './admin-footer.component.html',
  styleUrls: ['./admin-footer.component.css']
})
export class AdminFooterComponent implements OnInit {
  @Input() forms;
  constructor() { }

  ngOnInit() {
  }

}
