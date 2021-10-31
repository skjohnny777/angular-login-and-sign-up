import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }

}
