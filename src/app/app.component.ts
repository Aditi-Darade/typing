import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {lorem} from 'faker';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  randomText = lorem.sentence();
  enteredText ='';
  onInput(event: Event)
  {
    const target = event.target as HTMLInputElement; //?
    this.enteredText = String(target.value) //?
    console.log(this.enteredText);
    
  }
  compare(letter: string, enteredText: string)
  {
    if (!enteredText)
      {
        return 'pending';
      }
    if(enteredText == letter)
    {
      return 'match';
    }
    else 
    {
      return 'notMatch';
    }
  }
  /*
  generateRandomSentence()
  {
     var randomSentence = '';
     const letters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i=0; i <Math.floor(Math.random() * 10); i++ )
    {
      randomSentence = randomSentence + letters[Math.floor(Math.random() * 26)];
    }
    return randomSentence;
  }
  */
}
