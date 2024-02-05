import { Component } from '@angular/core';

@Component({
  selector: 'app-example-pipes',
  templateUrl: './example-pipes.component.html',
  styleUrls: ['./example-pipes.component.scss']
})
export class ExamplePipesComponent {

  title: string = 'StudEnt POrtal Page'
  score: number = 57.425845698541
  today: Date = new Date()
  user = {
    name: 'John Doe',
    age: 40,
    isActive: true
    
  }
  longString = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium ab non molestiae dicta ipsum. Ipsum, magnam unde. Odit, distinctio ipsam repellat impedit a aliquid, libero, facilis pariatur velit consectetur itaque.'
}
