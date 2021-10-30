import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombre = new FormControl('');

  constructor() { }

  ngOnInit() {
  }
  cambiarNombre(){
  this.nombre.setValue('Ornitorrinco');
  }
}
