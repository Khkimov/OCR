import { Component } from '@angular/core';
import {UploadService} from "../services/upload.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  constructor(public imageService: UploadService) {
  }
}
