import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/modules/noticia/models/noticia.model';
import { NoticiaService } from 'src/modules/noticia/services/noticia.service';

@Component({
  selector: 'app-noticialistpage',
  templateUrl: './noticialistpage.component.html',
  styleUrls: ['./noticialistpage.component.scss']
})
export class NoticialistpageComponent{
	noticias : Array<Noticia> = [];
	constructor(
		noticiaService: NoticiaService
	) {

		noticiaService.getNoticias().subscribe((noticias) => {
			this.noticias = noticias.data;
			console.log(this.noticias);
		});
	}
}
