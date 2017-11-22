import { Component, Input } from '@angular/core';

@Component({
  selector: 'likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {

  @Input('isSelected') isSelected: boolean;
  @Input('numOfLikes') numOfLikes: number = 0;

  likeIsClicked() {
    this.numOfLikes += (this.isSelected) ? -1 : +1;
    this.isSelected = !this.isSelected;    
  }

}
