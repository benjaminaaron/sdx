# Solid Development eXperience toolkit

SDX makes development of SOLID applications more enjoyable.

**To read more about the conceptual ideas concerning the SDX, see the [Powerpoint slides](https://github.com/SolidLabResearch/sdx/raw/master/.assets/sdk_sdx_concept.pptx)**

## Installation

```bash
npm i -g @solidlab/sdx
```

Requires at least node 18.0.0

## Usage

```bash
sdx help
```

### Init workspace

Initializes a workspace for Solid Application Development.

```bash
sdx init [--force] [--noLibs] [name]
```
Writes 3 important files:

* `.solidmanifest`: manifest of your application
* `.sdxconfig`: config files for the sdx toolkit
* `package.json`: starting package.json for this project

Also installs the @solidlab/sdx cli library locally and also the @solidlab/sdx-sdk library.

### Search type packages

Search for a Solid type package.

```bash
sdx search [query]
```

Will search the central SolidLab Catalog for potential matches.

### Install type package

Install a Solid type package.

```bash
sdx install package [UriOrIndex]
// or
sdx package install [UriOrIndex]
```

Install a type package into your local project. It will be added to the .solidmanifest file and will - by default - update the generated GraphQL Schema (and generated sdk if applicable).
A full URI can be used, or the index from the latest results table generated by the cli (eg. from `sdx search`).

### Uninstall type package

Install a Solid type package.

```bash
sdx uninstall package [UriOrIndex]
// or
sdx package uninstall [UriOrIndex]
```

Uninstall a package type from your local project. It will be removed from the .solidmanifest file and will - by default - update the generated GraphQL Schema (and generated sdk if applicable).
A full URI can be used, or the index from the latest results table generated by the cli (eg. from `sdx list packages`).

### List type packages

List all installed Solid type packages.

```bash
sdx list packages
// or
sdx packages list
```

Lists all installed type packages.

### Generate schema

Manually trigger GraphQL Schema generation, based on the installed type packages.

```bash
sdx generate schema
```

The GraphQL Schema will be used to generate typings and a Sdk SolidClient class.

### Generate typings

Manually trigger generation of typings, based on the installed type packages.

```bash
sdx generate typings
```

The generated typings can be used by an IDE for intellisense autocompletion and strong typing language support.


### Generate sdk client

Manually trigger a SolidClient sdk client, based on the generated GraphQL Schema and the user-created GraphQL Queries in the `src/gql/` folder.

```bash
sdx generate sdk
```

The generated Sdk Client can then be used with the @solidlab/sdx-sdk library to interface with accessible pods.


## Contributing

Start the continuous development server with:

```bash
npm run dev
```
