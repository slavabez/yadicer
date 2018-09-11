interface rollResults {
  total?: number;
  rolls?: singleRoll[];
}

interface singleRoll {
  order?: number;
  sides?: number;
  result?: number;
}

/**
 * Returns an object that represents the dice roll
 * @param input - Expects a standard roll notation XdY, where X is number of dice and y is sides per die
 */
export function roll(input: string): Promise<rollResults> {
  return new Promise((resolve, reject) => {
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

    // Results will be an object with total count and an array of individual rolls
    const results: rollResults = {
      total: 0,
      rolls: []
    };

    for (let i = 0; i < rolls; i++) {
      const value = Math.ceil(Math.random() * sides);
      results.rolls!.push({
        order: i,
        sides: sides,
        result: value
      });

      // Keep a total count
      results.total! += value;
    }

    resolve(results);
  });
}
