import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
})
export class ServerComponent {
  title = "MS Server";

  GetData(){
    return "Karl";
  }
  
  ChangeTitle(event){
    this.title = "Oracle DB";
  }
  constructor(){  }

  ngOnInit(): void{}
}
