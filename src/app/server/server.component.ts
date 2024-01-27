// server.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class ServerComponent {
  title = "MS Server";
  username = "";

  GetData() {
    return "Karl";
  }

  ChangeTitle(event) {
    this.username = ""; // Reset username 
  }

  constructor() { }

  ngOnInit(): void {}
}
