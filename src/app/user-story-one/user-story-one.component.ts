import { Component, OnInit } from '@angular/core';
import { UserStoryService } from '../user-story.service';

@Component({
  selector: 'app-user-story-one',
  templateUrl: './user-story-one.component.html',
  styleUrls: ['./user-story-one.component.css']
})
export class UserStoryOneComponent implements OnInit {
  dataReceived: ArrayBuffer | string;
  outputArr: any[] = [];

  constructor(private userStoryService: UserStoryService) { }

  ngOnInit() {

  }

  fileSelected(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.addEventListener('load', (evt) => {
    this.dataReceived = (evt.target as FileReader).result.toString();
    // using the service
    this.outputArr = this.userStoryService.giveOutput(this.dataReceived).map(function(all){return all.
      reduce(function(acc, currentV) { return acc + currentV }, []); }).map(function(each){
        if(/\?/g.test(each)){
          return each.concat(' ILLEGAL');
        } else {
          return each;
        }
      });
    });
    reader.readAsText(file);
  }
}
