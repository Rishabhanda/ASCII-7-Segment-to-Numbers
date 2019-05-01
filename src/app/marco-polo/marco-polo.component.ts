import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-marco-polo',
  templateUrl: './marco-polo.component.html',
  styleUrls: ['./marco-polo.component.css']
})
export class MarcoPoloComponent implements OnInit {
  marcoPoloArray: number[] = [];
  result: string = '';
  constructor() { }

  ngOnInit() {
  }

  onSubmit(formData: NgForm) {
    this.result = '';
    this.marcoPoloArray = [];
    this.marcoPoloArray = this.marcoPolo(formData.value.value);
    this.finalMarcoPoloReturn();
  }

  marcoPolo(valueLimit) {
    for (let i = 1; i <= valueLimit; i++ ) {
      this.marcoPoloArray.push(i);
    }
    return this.marcoPoloArray;
  }

  finalMarcoPoloReturn() {
    while(this.marcoPoloArray.length) {
      let numberReceived = this.marcoPoloArray.shift();
      if(numberReceived % 28 == 0){
        this.result = this.result.concat('marcopolo ,');
      }else if(numberReceived % 7 == 0){
        this.result = this.result.concat('polo ,');
      }else if(numberReceived % 4 == 0){
        this.result = this.result.concat('marco ,');
      }else{
        this.result = this.result.concat(numberReceived.toString(),' ,');
      }
    }
  }
}
