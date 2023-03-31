import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from './models/foods.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular101';
  items: string[] = [
    'Share code examples of common Angular components (Component, Service, Pipe, etc.)',
    'Explain the Angular architecture and how the pieces fit together',
    'Discuss Angular CLI and how to build and deploy Angular apps',
    'Teach Angular routing and how to set up routes in an app',
    'Cover Angular forms and reactive forms in detail',
    'Explain Angular lifecycle hooks and when to use them',
    'Share tips and tricks for improving Angular development workflow',
    'Answer questions from attendees and have an open Q&A session',
    'Teach Angular testing and how to write unit and integration tests',
  ]
  panelOpenState: boolean = false;
  foods: Food[] = [
    {value: 'shortDate', viewValue: 'shortDate'},
    {value: 'mediumDate', viewValue: 'mediumDate'},
    {value: 'longDate', viewValue: 'longDate'},
  ];

  userOption: string = '';
  userInput: string = '';

  today = Date.now();

  constructor(private router: Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }


  onSelectionChange(event: any){
    // this.userOption = event.value.slice(0,1).charAt(0).toUpperCase() + event.value.slice(1,-2)
    this.userOption = event.value;
    console.log(this.userOption);
    
  }

  switch(tab: string){
    this.router.navigate([tab]);
  }
  
}
