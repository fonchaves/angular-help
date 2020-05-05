import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  // Create addUser with service
  addUser(user: User) {
    // Add from server
    this.userService.addUser(user).subscribe((user) => {
      this.users.push(user);
    });
  }

  deleteUser(user: User) {
    // Remove from UI
    this.users = this.users.filter((t) => t.id !== user.id);
    // Remove from server
    this.userService.deleteUser(user).subscribe();
  }
}
