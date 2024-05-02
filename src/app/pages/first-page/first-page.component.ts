import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UploadService} from "../../services/upload.service";

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.scss'
})
export class FirstPageComponent {
  // isFileSelected = false;

  constructor(
    private router: Router,
    private imageService: UploadService
  ) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageService.image = URL.createObjectURL(file);
      console.log('Файл выбран:', file.name);
      this.router.navigate(['/result']);
    } else {
      console.log('Нет файла');
    }
  }
}
