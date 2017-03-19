import 'reflect-metadata';
import { Injectable } from '@angular/core';
import { IUSStateService } from './definitions/ius-states.service';
import { IRegion } from './definitions/iregion';
import { TERRITORIES } from './mocks/mock-territories';
import { STATES } from './mocks/mock-states';

@Injectable()
export class USStateService implements IUSStateService {
	constructor() { }

	getStates(): IRegion[] {
		return STATES;
	}

	getTerritories(): IRegion[] {
		return TERRITORIES;
	}

	getAll(): IRegion[] {
		return STATES.concat(TERRITORIES);
	}
}