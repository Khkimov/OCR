import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UploadService} from "../../services/upload.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.scss'
})
export class FirstPageComponent {
  // isFileSelected = false;

  constructor(
    private router: Router,
    private imageService: UploadService,
    private modalService: ModalService
  ) {}

  onFileSelected(event: any) {
    this.modalService.open()
    const file = event.target.files[0];
    if (file) {
      this.imageService.image = URL.createObjectURL(file);
      this.router.navigate(['/result']);
      // this.modalService.close()
    } else {
      console.log('Нет файла');
    }
  }
}
