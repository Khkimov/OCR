import { Component } from '@angular/core';
import {UploadService} from "../../services/upload.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  constructor(
    public imageService: UploadService,
    public modalService: ModalService
  ) {}

  onCancel() {
    if (this.modalService.isVisible$) {
      this.modalService.close()
    }
  }
}
