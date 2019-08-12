import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inner-code',
  templateUrl: './inner-code.component.html',
  styleUrls: ['./inner-code.component.scss']
})
export class InnerCodeComponent implements OnInit {
  @Input() containerClass: string;
  @Input() innerCodeClass = 'text-warning';
  @Input() innerCode: string;

  constructor() {}

  ngOnInit() {}
}
