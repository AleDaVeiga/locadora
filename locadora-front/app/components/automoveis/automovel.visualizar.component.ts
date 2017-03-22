import { Component } from '@angular/core';
import { Automovel } from '../.././models/automovel';
import { AutomovelService } from '../.././services/automovel.service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'automovel-visualizar',
	templateUrl: 'app/views/automoveis/visualizar.html',
	providers: [ AutomovelService ],
	directives: [ ROUTER_DIRECTIVES ]
})
export class AutomovelVisualizarComponent implements OnInit {

	private id: number;
	private automovel: Automovel;
	private msgErro: string;

	constructor(
		private route: ActivatedRoute, 
		private automovelService: AutomovelService) {
	}

	ngOnInit() {
		this.id = +this.route.snapshot.params['id'];
		this.automovel = new Automovel();
		this.automovelService.buscaPorId(this.id)
			.subscribe(
                	automovel => this.automovel = automovel,
                	error => this.msgErro = error);
	}
}