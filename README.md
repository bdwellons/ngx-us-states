# README #

Angular2 Service for retrieving a list of States, Territories or a merged array of both

### How do I get set up? ###

* import { USStateService } from './path/to/service/us-states.service';
* providers: [USStateService] // Add to providers array
* constructor(private usStateService: USStateService) {} // Injecty into constructor
* this.usStateService.getStates(); // Use

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Brant Wellons <Brant@BrantWellons.com