import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [ReactiveFormsModule],
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
