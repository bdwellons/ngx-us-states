import { Injectable } from '@angular/core'; 
import { State } from './state';
import { STATES } from './mocks.states';
import { TERRITORIES } from './mocks.territories';

@Injectable()
export class USStateService {
	constructor() {}

	getStates(): State[] {
		return STATES;
	}

	getTerritories(): State[] {
		return TERRITORIES;
	}

	getAll(): State[] {
		return STATES.concat(TERRITORIES);
	}
}