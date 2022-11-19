import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoticiaModule } from 'src/modules/noticia/noticia.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NoticiaPageComponent } from './pages/noticia/noticia.page.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NoticiaModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
