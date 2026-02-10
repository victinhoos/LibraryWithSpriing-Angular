import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // Importação correta

import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    Header, Footer, RouterLink,RouterLinkActive],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  passwordVisible: boolean = false;

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
}