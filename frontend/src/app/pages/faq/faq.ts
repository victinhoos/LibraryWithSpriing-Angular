import { Component } from '@angular/core';

import {Header} from "../../components/header/header";
import {FaqCard} from "../../components/faq-card/faq-card";
import {Footer} from "../../components/footer/footer";

@Component({
  selector: 'app-faq',
  imports: [Header, FaqCard, Footer],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {

}
