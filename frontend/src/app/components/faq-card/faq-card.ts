import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq-card',
  imports: [],
  templateUrl: './faq-card.html',
  styleUrl: './faq-card.css',
})
//ID//TITULO//DESCRICAO//
export class FaqCard {
  @Input() id: string = "titulo";
  @Input() titulo: string ="titulo";
  @Input() descricao: string="descricao";
  @Input() bgColor: string="--bg-color";

}
