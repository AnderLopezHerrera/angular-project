import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaTopNavComponent } from './components/noticia-top-nav/noticia-top-nav.component';
import { NoticiaPreviewComponent } from './components/noticia-preview/noticia-preview.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { NoticiaService } from './services/noticia.service';



@NgModule({
  declarations: [NoticiaTopNavComponent, NoticiaPreviewComponent, NoticiaComponent],
  imports: [
	  CommonModule
	],
exports : [NoticiaTopNavComponent, NoticiaPreviewComponent, NoticiaComponent]
})
export class NoticiaModule { }
