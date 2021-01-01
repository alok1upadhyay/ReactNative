#!/bin/node
"use strict";

var fs = require("fs"); //Obtain the environment string passed to the node script


var environment = process.argv[2]; //read the content of the json file

var envFileContent = require("../envs/".concat(environment, ".json")); //copy the json inside the env.json file


fs.writeFileSync("env.json", JSON.stringify(envFileContent, undefined, 2));