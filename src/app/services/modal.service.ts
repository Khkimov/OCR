import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor() { }

  open() {
    this.isVisible$.next(true)
  }

  close() {
    this.isVisible$.next(false)
  }
}
