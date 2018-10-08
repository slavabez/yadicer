## Can I contribute?

Of course! Have a read through the FAQ, the library is really simple

## Basic structure, Jest tests

The source files reside in `src` and are written in Typescript. There are 2 NPM commands: 
* `npm run build`  - uses the `tsconfig.json` to build the files and put them in the `dist` directory. Also includes Typescript definition files.
* `npm run test` - executes the Jest test suite. Tests reside in the `test` folder and are also written in Typescript. Make sure your tests succeed before pushing and don't forget to add tests if you added new functionality.

## Publishing a new version to NPM

Publishing to NPM is done automatically via Travis, the CI system. Any commits to the `production` branch get deployed to NPM. Don't forget to increment the version!
