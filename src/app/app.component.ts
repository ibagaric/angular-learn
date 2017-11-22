import { Component } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title | cFilter:5:10}}</h1>

    <likes
      [numOfLikes]="tweet.likesCount"
      [isSelected]="tweet.isLiked">
    </likes>
  
    <br>
    <input [(ngModel)]="title" #pero required>

    <br>
      {{pero.className}}
    <br>
    <br> 

    {{name | titleCase}}
    <br>
    {{email}}
    ​<span class="glyphicon" [ngClass]="{'glyphicon-star': isFavorite, 'glyphicon-star-empty': !isFavorite}"> pero </span>

    <pero 
      [marko]="title"
      (change)="somethingChange()">
    </pero>

    <app-panel-component> 
      <div class="heading">Pero</div>
      <div class="body">marko</div>
    </app-panel-component>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = '012345678932456798 app dkflajs lkajsd flkajsdfklasjf aklsjfklasdjf klasjf laksdjfčkal jačskjf';
  isFavorite = true;

  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true
  }

  keyUp() {
    console.log(this.title);
  }

  somethingChange() {
    console.log("Something changed");
  }


}
