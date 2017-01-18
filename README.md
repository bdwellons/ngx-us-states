# README #

Angular2 Service for retrieving a list of States, Territories or a merged array of both

### How do I get set up? ###

* import { USStateService } from 'ng2-us-states/us-states.service';
* providers: [USStateService] // Add to providers array
* constructor(private usStateService: USStateService) {} // Inject into component constructor
* this.usStateService.getStates(); // Use

### Methods ###
* getStates - returns 50 states
* getTerritories - returns 9 territories
* getAll - returns 59 states and territories

### Contribution guidelines ###

* Write tests
* Pull Request

### Who do I talk to? ###

* Brant Wellons <Brant@BrantWellons.com>