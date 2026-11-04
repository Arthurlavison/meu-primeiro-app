import { Component } from '@angular/core';
import { Home } from '../../components/home/home';

@Component({
  imports: [Home],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {}
