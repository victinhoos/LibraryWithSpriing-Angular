import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  HeaderFormulario = new FormGroup({
    nome: new FormControl('') 
  });

   clearForm() {
    this.HeaderFormulario.reset();
  }
    onSubmit() {
      console.log(this.HeaderFormulario.value);
  }
}
