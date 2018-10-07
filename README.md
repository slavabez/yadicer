# Yet Another DICE Roller

Work in progress, use with caution. I wouldn't use this in production.

A simple dice roller, just for the sake of practicing creating and publishing NPM modules.

Made with TypeScript, and provides typescript support out of the box.

## FAQ

1. _**Q:** What's with the name? Why not yadr?_ **A:** It's already taken. Seriously, most dice-rolling names have been taken
2. _**Q:** How do I use it in Node?_ **A:** Coming soon...
3. _**Q:** Why does it return a promise, as opposed to a simple result?_ **A:** At the moment the library uses JavaScript's built in `Math.random()` function to roll the dice, which is by no means truly random. In the future I want to add Random.org's API, which will take some time. It would also be cool to add ability to add a seed, like in Java.

## How to use in Node

Depending on the module target specified during compilation, the compiler will generate appropriate code for Node.js (CommonJS), require.js (AMD), UMD, SystemJS, or ECMAScript 2015 native modules (ES6) module-loading systems. For more information on what the define, require and register calls in the generated code do, consult the documentation for each module loader.

* Using CommonJS (require)

`var mod_1 = require("./mod");
exports.t = mod_1.something + 1`

* Using ES6 imports (import)

`import { something } from "./mod";
export var t = something + 1;`

* Using Typescript

`import m = require("mod");
export let t = m.something + 1;`

## Notes
It doesn't currently work in the browser out of the box
