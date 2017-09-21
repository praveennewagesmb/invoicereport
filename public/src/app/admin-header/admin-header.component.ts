import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
  animations: [
    trigger('topmenu', [
        state('smalltext', style({display: 'none'})),
        state('largetext', style({display: 'block',})),
        state('leftlarge-lg', style({'flex-basis': '230px',})),
        state('leftsmall-lg', style({'flex-basis': '50px',})),
        state('rightsmall-lg', style({'flex-basis': 'calc(100% - 230px)'})),
        state('rightlarge-lg', style({'flex-basis': 'calc(100% - 50px)'})),        
        transition('leftsmall <=> leftlarge', animate('500ms ease-in')),
        transition('rightsmall <=> rightlarge', animate('500ms ease-in')),        
        transition('leftsmall-lg <=> leftlarge-lg', animate('500ms ease-in')),
        transition('rightsmall-lg <=> rightlarge-lg', animate('500ms ease-in')),
    ]),
       ]
})
export class AdminHeaderComponent implements OnInit {
  statesmall: string;
  statelarge: string;
  statecollapse: string;
  stateexpand: string;

  animateMe() {
    if (screen.width > 767){
        this.statesmall = (this.statesmall === 'smalltext' ? 'largetext' : 'smalltext');
        this.statelarge = (this.statelarge === 'largetext' ? 'smalltext' : 'largetext');
        this.statecollapse = (this.statecollapse === 'leftlarge-lg' ? 'leftsmall-lg' : 'leftlarge-lg');
        this.stateexpand = (this.stateexpand === 'rightsmall-lg' ? 'rightlarge-lg' : 'rightsmall-lg');
    } 

  }
  constructor() {
    if (screen.width > 767){
  this.statesmall = 'smalltext';
  this.statelarge = 'largetext';
  this.statecollapse = 'leftlarge-lg';
  this.stateexpand = 'rightsmall-lg';
    }
  }

  ngOnInit() {}

}
