import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragAndDropService {
  dropZone = document.querySelector('.app') as HTMLElement

  constructor() { }

  // addDragOverBlock(dragOverBlock: HTMLElement) {
  //   if (!dragOverBlock) {
  //     this.dropZone.insertAdjacentHTML('beforeend', dragOverBlock)
  //   }
  // }
}
