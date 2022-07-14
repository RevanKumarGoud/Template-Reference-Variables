import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
              <input type="text" #myInput>
              <button (click)="logMessage(myInput.value)">Log</button>
              <button (click)="logMessage(myInput)">Log</button>
              <!--Two Way binding-->
              <input type="text" [(ngModel)]="name">
               {{name}}
               <!--ngif dircetives-->
               <h2 *ngIf="true">Task is visble</h2>
               <h3 *ngIf="false">Task is hiden</h3>
               <h3 *ngIf="display; else elseBlock">Task is display visble</h3>
              <ng-template #elseBlock>
                <h3>Heloo</h3>
              </ng-template>
  `,
  styles: []
})
export class TestComponent implements OnInit {
public name = "";
public display = "true";
  constructor() { }

  ngOnInit(): void {
  }
 
  logMessage(value: any){
    console.log(value);
  }
}
