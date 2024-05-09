import { Component } from '@angular/core';
import {UploadService} from "../../services/upload.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.scss'
})
export class SecondPageComponent {
  constructor(
    public imageService: UploadService,
    private modalService: ModalService
  ) {
    if (this.modalService.isVisible$) {
      setTimeout(() => {
        this.modalService.close()
      }, 2000)
    }
  }
}
