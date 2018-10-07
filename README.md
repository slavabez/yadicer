# Yet Another DICE Roller

[![Build Status](https://travis-ci.org/slavabez/yadicer.svg?branch=master)](https://travis-ci.org/slavabez/yadicer)

Work in progress, use with caution. I wouldn't use this in production.

A simple dice roller NPM module, just for the sake of practicing creating and publishing NPM modules.

Made with TypeScript, and provides typescript support out of the box.

## FAQ

1. _**Q:** What's with the name? Why not yadr?_ **A:** It's already taken. Seriously, most dice-rolling names have been taken
2. _**Q:** How do I use it in Node?_ **A:** Coming soon...
3. _**Q:** Why does it return a promise, as opposed to a simple result?_ **A:** At the moment the library uses JavaScript's built in `Math.random()` function to roll the dice, which is by no means truly random. In the future I want to add Random.org's API, which will take some time. It would also be cool to add ability to add a seed, like in Java.

## How to use in Node

* Using CommonJS (require) with `.then`

```js
const roll = require("yadicer");

roll("2d20").then((result) => {
  console.log(`We rolled a total of ${result.total}`);
});
```
* Same, but with async/await

```js
const roll = require("yadicer");

// In an async function
const result = await roll("2d20");
console.log(`We rolled a total of ${result.total}`);
```

* Using ES6 imports (import)

```js
import roll from "yadicer";

// In an async function
const result = await roll("2d20");
console.log(`We rolled a total of ${result.total}`);
```

* Using Typescript

```typescript
import * as roll from "yadicer";

// In an async function
const result = await roll("2d20");
console.log(`We rolled a total of ${result.total}`);
```

## Notes
It doesn't currently work in the browser out of the box, but should do with a bundler like Webpack or Parcel
