import { Component } from '@angular/core';
import { Automovel } from '../.././models/automovel';
import { AutomovelService } from '../.././services/automovel.service';
import { OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'automovel-cadastrar',
	templateUrl: 'app/views/automoveis/cadastrar.html',
	providers: [ AutomovelService ],
	directives: [ ROUTER_DIRECTIVES ]
})
export class AutomovelCadastrarComponent implements OnInit {

	private automovel: Automovel;
	private msgErro:string;

	constructor(private router: Router, 
		private automovelService: AutomovelService) {
	}

	ngOnInit() {
		this.automovel = new Automovel();
	}

	cadastrar() {
		this.automovelService.cadastrar(this.automovel)
			.subscribe(
                	automovel => this.router.navigate(['/automovel-listar']),
                	error => this.msgErro = error);
		
	}
}