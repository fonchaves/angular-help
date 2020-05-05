import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersUrl: string = 'http://localhost:3000';
  usersLimit = '?_limit=5';

  constructor(private http: HttpClient) {}

  // Get Users
  getUsers(): Observable<User[]> {
    const url = `${this.usersUrl}/users`;
    return this.http.get<User[]>(url);
  }

  // Add User
  addUser(user: User): Observable<User> {
    const url = `${this.usersUrl}/users`;
    return this.http.post<User>(url, user, httpOptions);
  }

  // Update User
  updateUser(user: User): Observable<User> {
    const url = `${this.usersUrl}/users/${user.id}`;
    return this.http.put<User>(url, user, httpOptions);
  }

  // Delete User
  deleteUser(user: User): Observable<User> {
    const url = `${this.usersUrl}/users/${user.id}`;
    return this.http.delete<User>(url, httpOptions);
  }
}
