import { Component } from '@angular/core';
import { Automovel } from '../.././models/automovel';
import { AutomovelService } from '../.././services/automovel.service';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router'; 

@Component({
	selector: 'automovel-editar',
	templateUrl: 'app/views/automoveis/editar.html',
	providers: [ AutomovelService ],
	directives: [ ROUTER_DIRECTIVES ]
})
export class AutomovelEditarComponent implements OnInit {

	private id: number;
	private automovel: Automovel;
	private msgErro: string;

	constructor(
		private route: ActivatedRoute, 
		private router: Router, 
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

	atualizar() {
		this.automovelService.atualizar(this.automovel)
			.subscribe(
                	automovel => this.router.navigate(['/automovel-listar']),
                	error => this.msgErro = error);
	}
}