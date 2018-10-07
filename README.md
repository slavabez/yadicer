# Yet Another DICE Roller

Work in progress, use with caution. I wouldn't use this in production.

A simple dice roller, just for the sake of practicing creating and publishing NPM modules.

Made with TypeScript, and provides typescript support out of the box.

## FAQ

1. _**Q:** What's with the name? Why not yadr?_ **A:** It's already taken. Seriously, most dice-rolling names have been taken
2. _**Q:** How do I use it in Node?_ **A:** Coming soon...
3. _**Q:** Why does it return a promise, as opposed to a simple result?_ **A:** At the moment the library uses JavaScript's built in `Math.random()` function to roll the dice, which is by no means truly random. In the future I want to add Random.org's API, which will take some time. It would also be cool to add ability to add a seed, like in Java.
