import * as yadicer from "../dist/yadicer";

yadicer.default("5d6")
  .then(value => {
    console.log(value);
  })
  .catch(e => console.error(e));
