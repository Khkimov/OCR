import { Component } from '@angular/core';
import {UploadService} from "../../services/upload.service";

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.scss'
})
export class SecondPageComponent {
  constructor(
    public imageService: UploadService
  ) {
  }
}
