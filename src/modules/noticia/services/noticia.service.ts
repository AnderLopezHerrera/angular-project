import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoticiaService {

	constructor(private http: HttpClient) { }

	public getNoticias() : Observable<any>{
		return this.http.get(`${environment.api_server}noticia`);
	}

	public getNoticiaById(id: number): Observable<any> {
		return this.http.get(`${environment.api_server}noticia/${id}`);
	}
}