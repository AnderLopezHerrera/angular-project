import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'noticia',
    loadChildren: () =>
      import('./pages/noticialist/noticialist.module').then(
        (m) => m.NoticialistModule
      ),
  },
  {
    path: 'noticia/:noticia_id',
    loadChildren: () =>
      import('./pages/noticia/noticiapage.module').then(
        (m) => m.NoticiapageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
