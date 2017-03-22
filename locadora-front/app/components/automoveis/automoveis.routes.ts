import { RouterConfig } from '@angular/router';
import { AutomovelListarComponent } from './automovel.listar.component';
import { AutomovelCadastrarComponent } from './automovel.cadastrar.component';
import { AutomovelEditarComponent } from './automovel.editar.component';
import { AutomovelVisualizarComponent } from './automovel.visualizar.component';

export const AutomoveisRoutes: RouterConfig = [
	{ 
		path: 'automovel-listar', 
		component: AutomovelListarComponent
	},  
	{ 
		path: 'automovel-cadastrar', 
		component: AutomovelCadastrarComponent
	}, 
	{ 
		path: 'automovel-editar/:id', 
		component: AutomovelEditarComponent
	},
	{ 
		path: 'automovel-visualizar/:id', 
		component: AutomovelVisualizarComponent
	},
	{ 
		path: '', 
		redirectTo: '/automovel-listar', 
		terminal: true 
	}
];