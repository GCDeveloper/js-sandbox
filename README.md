# js-sandbox

Javascript sandbox
This repository contains several standalone files to play with certain javascript concepts such as generator functions and async await.
These can be run with `node`

---

Before you begin, install Node.js from [here](https://www.nodejs.org)

Then you can run the scripts in the terminal by typing a command like this:

`node <scriptname> <arguments>`

You will also need to specify the pathname, relative to the current working directory (cwd) of your terminal.

For example, <scriptname> could be ./functions/generators.js and <arguments> could be 10 6 and therefore you command would be:

`node generators.js 10 6`

To run the tests, files which end in `.test.js`, install mocha by running the npm install command like this:

`npm install mocha -g`

once installed, you can run the tests by typing in the terminal:

`mocha <scriptname>`

so for example:

`mocha functions.test.js`

or use a glob pattern like this:

`mocha **/*.test.js`
