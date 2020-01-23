# README

Angular Service for retrieving a list of States, Territories or a merged array of both

### How do I get set up?

- Import the module:
	- `import { USStateModule } from 'ng2-us-states';`
- Add it as an import:
	- `imports: [ USStateModule ]`
- Import in to your component:
	- `import { USSateService } from 'ng2-us-states'`
- Inject it in the constructor of your component:
	- `constructor(private usStateService: USStateService) {}`
- Call the methods:
	- `this.usStateService.getStates();`

### Methods

- `getStates()` //returns 50 states
- `getTerritories()` // returns 9 territories
- `getAll()` // returns 59 states and territories

### Contribution guidelines

- Write tests
- Pull Request

### Who do I talk to?

- Brant Wellons <Brant@BrantWellons.com>