import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  UserName:string = "";
  
  title = 'e-assignment-angular';

  // onClickButton():void{
  //  this.UserName ='';
   
  // }
  // userName = '';

  onClickButton() : void{
    this. UserName = '';
  }
  
}
