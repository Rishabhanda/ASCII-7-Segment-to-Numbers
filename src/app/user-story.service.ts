import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoryService {

  constructor() { }

  giveOutput(data: any){
    let k = 0;

    return data.split('\n').
    reduce(function(acc, currntV, currntI) {
      if (currntV.length > 2) {
        currntV.match(/.../g).forEach(function(item, index) {
          acc[k] =  acc[k] || [];
          acc[k][index] = acc[k][index] || [];
          acc[k][index][currntI] = item;
      });
       } else {
         // if a new empty line is entertained than increment the k so to insert nine digits in new array with in array
        k++;
       }
       return acc;
    }, [])
    .map(function(every) {
      return every.map(function(each)
        { return each.join('')}
      );
    }).map(function(every) {return every.map(function(all) {
      // creating a object for mapping
      console.log(all);
      const total = { 63: 0, 6: 1, 91: 2, 79: 3, 102: 4, 109: 5, 125: 6, 7: 7, 127: 8, 111: 9, 0: ' ' };
      let list = '909561432'.split('').reduce(function(acc, va , i){
        // checking whether the at particar index is there not a empty string
        if ( all[i] !== ' ') {
          // mapping if character found to the two power
          return acc + Math.pow(2, parseInt(va));
        } else { return acc; }
      }, 0);
        // checking that list is in the total or not
        return list in total ? total[list] : '?';
    });
  });
  }

}
