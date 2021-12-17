#!/usr/bin/env node

/**
 * base-node-cli
 * a list of hellos that demonstrate renjs functionalities
 *
 * @author robbie_wasabi <NA>
 */

require('dotenv').config()

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

// cmds
const hello = require('./cmds/hello')

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

// all logs for hellos will be included in their respective methods
(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);

	// ethers wallet hellos
	if (input.includes('hello')){
		if (!flags.param){
			log("must provide a param") 
			return
		}
		hello.sayHello(flags.param)
	}
})();
