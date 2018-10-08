import axios from 'axios';

interface rollResults {
  total?: number;
  rolls?: singleRoll[];
}

interface singleRoll {
  order?: number;
  sides?: number;
  result?: number;
}

interface config {
  useRandomOrg?: boolean;
}

/**
 * Returns an object that represents the dice roll
 * @param input - Expects a standard roll notation XdY, where X is number of dice and y is sides per die
 * @param options - Expects a config. Can be used to specify various options, refer to docs
 */
export = function roll(
  input: string,
  options: config = {useRandomOrg: false}
): Promise<rollResults> {
  return new Promise(async (resolve, reject) => {
    // Make sure it's valid notation
    const valid = input.match(/\d+[d]\d+/);
    if (!valid)
      reject(
        "Not a valid roll notation, needs to be integer, d, integer, e.g. 4d20"
      );
    // Delimiter by d to get number of rolls, then number of die size
    const elements = input.split("d");
    const rolls = parseInt(elements[0]);
    if (isNaN(rolls) || rolls === 0) reject("Invalid number of rolls");
    const sides = parseInt(elements[1]);
    if (isNaN(sides) || sides === 0) reject("Invalid number of sides");

    const results = await getRollResults(rolls, sides, options.useRandomOrg);

    resolve(results);
  });
};

function getRollResults(rolls: number, sides: number, useRandomOrg?: boolean): Promise<rollResults> {
  return new Promise(async (resolve, reject) => {

    // Results will be an object with total count and an array of individual rolls
    const results: rollResults = {
      total: 0,
      rolls: []
    };

    if (useRandomOrg) {
      const randomQueryString = `https://www.random.org/integers/?num=${rolls}&min=1&max=${sides}&col=1&base=10&format=plain&rnd=new`;

      try {
        const response = await axios.get(randomQueryString);
        let rolls;
        if (typeof response.data === 'number') {
          rolls = [response.data];
        } else {
          rolls = response.data.split("\n").filter(
            (a: string) => a.length > 0
          )
        }
        rolls.map((n: string, index: number) => {
          let singleRoll = parseInt(n);
          results.rolls!.push({
            order: index + 1,
            sides: sides,
            result: singleRoll
          });

          results.total! += singleRoll;
        });
        resolve(results);
      } catch (error) {
        reject(new Error("Error with the request to Random.org, check your internet connection and try again."));
      }
    } else {
      for (let i = 0; i < rolls; i++) {
        const value = Math.ceil(Math.random() * sides);
        results.rolls!.push({
          order: i + 1,
          sides: sides,
          result: value
        });

        // Keep a total count
        results.total! += value;
      }
      resolve(results);
    }
  });
}
