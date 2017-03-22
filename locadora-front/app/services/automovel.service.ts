import { Injectable } from '@angular/core';
import { Automovel } from '../models/automovel';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpUtilService } from './http.util.service';

@Injectable()
export class AutomovelService {

	private path = 'automoveis';

	constructor(private http: Http, private httpUtil: HttpUtilService) {
	}

	buscarTodos(): Observable<Automovel[]> {

		return this.http.get(this.httpUtil.url(this.path), this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}

	cadastrar(automovel: Automovel): Observable<Automovel> {
		let params = JSON.stringify(automovel);

    	return this.http.post(this.httpUtil.url(this.path), params, 
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros); 
	}

	atualizar(automovel: Automovel) {
		let params = JSON.stringify(automovel);

    	return this.http.put(this.httpUtil.url(this.path + '/' + automovel.id), params, 
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}

	remover(id: number) {

		return this.http.delete(this.httpUtil.url(this.path + '/' + id), 
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}

	buscaPorId(id: number): Observable<Automovel> {
		return this.http.get(this.httpUtil.url(this.path + '/' + id), 
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
	}
}