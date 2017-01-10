import { USStateService } from './us-states.service';

describe('Service: USStateService', () => {
	let service: USStateService;

	beforeEach(() => {
		service = new USStateService();
	});

	it('Should have a defined service', () => { 
		expect(service).toBeDefined();
	})
});