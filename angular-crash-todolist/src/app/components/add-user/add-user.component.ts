import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  @Output() addUser: EventEmitter<any> = new EventEmitter();

  genres = [
    { name: 'Masculino', value: 'M' },
    { name: 'Feminino', value: 'F' },
  ];

  form = new FormGroup({
    name: new FormControl(),
    cpf: new FormControl(),
    birthDate: new FormControl(),
    email: new FormControl(),
    celular: new FormControl(),
    genre: new FormControl(this.genres[0]),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const user = {
      name: this.form.value.name,
      cpf: this.form.value.cpf,
      birthDate: this.form.value.birthDate,
      email: this.form.value.email,
      celular: this.form.value.celular,
      genre: this.form.value.genre.value,
    };

    this.addUser.emit(user);
    /* Ou pode ser da forma abaixo, mas atentando ao Genre vir como array:
    this.addUser.emit(this.form.value);
    */
  }
}
