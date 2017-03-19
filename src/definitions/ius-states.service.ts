import { IRegion } from './../definitions/iregion';

export interface IUSStateService {
	getStates(): IRegion[];
	getTerritories(): IRegion[];
	getAll(): IRegion[];
}