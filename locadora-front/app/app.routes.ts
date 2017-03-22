import { provideRouter, RouterConfig } from '@angular/router';
import { AutomoveisRoutes } from './components/automoveis/automoveis.routes';

export const routes: RouterConfig = [
	...AutomoveisRoutes
]; 

export const APP_ROUTER_PROVIDERS = [ 
	provideRouter(routes)
];