import {Component, ComponentFactoryResolver} from '@angular/core';
import {Router} from "@angular/router";
import {ModalService} from "./services/modal.service";
import {DragAndDropService} from "./services/drag-and-drop.service";
import {DragAndDropComponent} from "./components/drag-and-drop/drag-and-drop.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isDrag = false;
  constructor(
    private router: Router,
    public modalService: ModalService,
    public dragAndDropService: DragAndDropService,
    private resolver: ComponentFactoryResolver
  ) {
    this.router.navigate(['']);
  }

  create() {
    this.isDrag = true
  }
}
