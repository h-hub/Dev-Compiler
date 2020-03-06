import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  number = 123;

  constructor() { }

  ngOnInit(): void {
  }

  ToBinary(value) {
    return Number(value).toString(2);
  }

}
