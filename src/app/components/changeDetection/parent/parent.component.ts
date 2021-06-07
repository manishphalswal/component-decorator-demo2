import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  user : {name: string} = {name : "Jacob"};
  constructor() { }

  ngOnInit(): void {
  }

  changeProperty() {
    this.user.name = "Sam";
  }

  changeObject() {
    this.user = {name : "Tom"};
  }

}
