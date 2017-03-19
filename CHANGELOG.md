# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

### Added

- `Karma` test runner and `Jasmine` for unit testing
- Unit test for all three available services
- Test coverage with `Istanbul`
- `CHANGELOG.md` file to keep versions information consistent
- Interface for the service provided, so that Dependency Inversion can be later considered

### Changed

- Now a module is exported which by default provides the service.
- Folder structure to make it more readable and scalable
- Mock file names to align with the Angular Style Guide

### Removed

- Unused devDependencies