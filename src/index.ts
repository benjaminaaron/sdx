#!/usr/bin/env node

// Polyfills
import "./polyfills.js";

import chalk from "chalk";
import { Command } from "commander";
import { ProjectBuilder } from "./project-builder.js";
import { ProjectService } from "./services/project.service.js";
import { SearchService } from "./services/search.service.js";
import { SOLID_PURPLE } from "./util.js";
import { LIB_VERSION } from './version.js';
import { container } from "tsyringe";
import { ShaclParserService } from "./services/shacl-parser.service.js";
import { TEST_SHACL_FILE_PATH } from "./constants.js";

// Remove warnings
process.removeAllListeners('warning');

const program = new Command();
const projectBuilder = new ProjectBuilder();
const project = new ProjectService();
const search = new SearchService();
const parser = new ShaclParserService();

// Main program
program
    .version(LIB_VERSION)
    .description(chalk.hex(SOLID_PURPLE)('Solid Development eXperience toolkit'));


// init
program.command('init')
    .description('initialize a new SDX project')
    .option('-f, --force', 'Overwrite any package.json that might be present.', false)
    .action((options) => projectBuilder.initProject(options));

// search
program.command('search')
    .description('search for a type')
    .argument('<type>', 'type to search for')
    .action((type) => search.search(type));

// type
const typeCommand = program.command('type').alias('types')
    .description('standard operations on types');
// type list
typeCommand.command('list')
    .description('list all installed types')
    .action(() => project.listTypes())
// type install
typeCommand.command('install')
    .argument('<iriOrIdx>', 'Full IRI of type or index number of previous list results.')
    .description('install a type (exact name match required)')
    .action((iriOrIdx) => project.installType(iriOrIdx));
// type uninstall
typeCommand.command('uninstall')
    .argument('<iriOrIdx>', 'Full IRI of type or index number of previous list results.')
    .description('uninstall a type (exact name match required)')
    .action((iriOrIdx) => project.unInstallType(iriOrIdx));

program.command('test')
    .description('shacl test')
    .action(() => parser.parseShacl(TEST_SHACL_FILE_PATH));


program.parse(process.argv);
