import { Component } from '@angular/core';

import {Header} from '../../components/header/header';
import {Banner} from '../../components/banner/banner';
import {Recommending} from '../../components/recommending/recommending';
import {Footer} from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Header, Banner, Recommending, Footer ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
