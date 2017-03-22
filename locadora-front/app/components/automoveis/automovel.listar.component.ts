import { Component } from '@angular/core';
import { Automovel } from '../.././models/automovel';
import { AutomovelService } from '../.././services/automovel.service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ModalUtilComponent } from '../utils/modal.util.component';

@Component({
	selector: 'automovel-listar',
	templateUrl: 'app/views/automoveis/listar.html',
	providers: [ AutomovelService ],
	directives: [ ROUTER_DIRECTIVES, ModalUtilComponent ]
})
export class AutomovelListarComponent implements OnInit {

	private automoveis: Automovel[];
	private idExcluir: number;
	private msgErro: string;

	constructor(private automovelService: AutomovelService) {
	} 

	buscarTodos() {
		this.automovelService.buscarTodos()
				.subscribe(
                	automoveis => this.automoveis = automoveis,
                	error  => this.msgErro = error);
	}

	ngOnInit() {
		this.buscarTodos();
	}

	remover(id: number) {
 		this.idExcluir = id;
 	}

 	onExcluir() {
 		this.automovelService.remover(this.idExcluir)
 			.subscribe(
                	data  => this.buscarTodos(),
                	error => this.msgErro = error);
 		this.idExcluir = -1;
 	}
}