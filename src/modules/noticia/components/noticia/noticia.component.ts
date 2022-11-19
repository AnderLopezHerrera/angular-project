import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../models/noticia.model';
import { NoticiaService } from '../../services/noticia.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
	noticia: Noticia = {
		id : 0,
		titular: "",
		entradilla: "",
		contenido: "",
		imagen : ""
	};
	noticia_id: number = 0;
	constructor(noticiaService: NoticiaService) {
		noticiaService.getNoticiaById(this.noticia_id).subscribe((noticias) => {
		this.noticia = noticias.data;
		});
  }

  ngOnInit(): void {}
}
