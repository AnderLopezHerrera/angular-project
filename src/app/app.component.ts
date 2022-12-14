import { Component } from '@angular/core';
import { Noticia } from 'src/modules/noticia/models/noticia.model';
import { NoticiaService } from 'src/modules/noticia/services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'angular-project';
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
