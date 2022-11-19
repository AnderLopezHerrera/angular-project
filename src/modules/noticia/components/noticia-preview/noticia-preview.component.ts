import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia-preview',
  templateUrl: './noticia-preview.component.html',
  styleUrls: ['./noticia-preview.component.scss']
})
export class NoticiaPreviewComponent implements OnInit {

	@Input('noticia') noticia;
	constructor() { }

	ngOnInit(): void {
	}



}
