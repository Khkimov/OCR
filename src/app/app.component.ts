import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ModalService} from "./services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private router: Router,
    public modalService: ModalService
  ) {
    this.router.navigate(['']);
  }
}
