import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent implements OnInit {
  @Input() user: User;
  @Output() deleteUser: EventEmitter<User> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      user: true,
    };

    return classes;
  }

  onDelete(user) {
    this.deleteUser.emit(user);
  }
}
