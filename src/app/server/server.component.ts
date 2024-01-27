import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class ServerComponent {
  title = "MS Server";
  username = ""; // Add a new property for username

  GetData() {
    return "Karl";
  }

  ChangeTitle(event) {
    this.title = " ";
  }

  constructor() { }

  ngOnInit(): void {}
}
