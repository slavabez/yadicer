import "jest";
import * as roll from "../dist/index";

describe("The main test suite", () => {
  describe("The good, properly formatted cases", () => {
    test("Works with 1d6, returns a properly formatted object within limits", async () => {
      const result = await roll("1d6");
      // Assert the right object properties exist
      expect(result.total).toBeGreaterThanOrEqual(1);
      // @ts-ignore, I know it might not be defined, the test will show it
      expect(result.rolls.length).toBe(1);
      // @ts-ignore
      expect(result.rolls[0].order).toBe(1);
      // @ts-ignore
      expect(result.rolls[0].sides).toBe(6);
      // @ts-ignore
      expect(result.rolls[0].result).toBeGreaterThanOrEqual(1);
      // @ts-ignore
      expect(result.rolls[0].result).toBeLessThanOrEqual(6);
    });
    test("Works with a large number of throws (100)", async () => {
      const result = await roll("100d20");
      // Expect 103 assertions cause checking each throw
      expect.assertions(103);
      // Expect the total of 100 throws of 20 side dice to be between 100 and 2000
      expect(result.total).toBeGreaterThanOrEqual(100);
      expect(result.total).toBeLessThanOrEqual(100 * 20);
      expect(result.rolls).toHaveLength(100);

      // Extract values, make sure they're all between 1 and 20
      // @ts-ignore
      const values = result.rolls.map(item => item.result);
      // Create a 'valid rolls' array, from 1 to 20 inclusive
      const allowedValues = Array.from(Array(21).keys()).slice(1);

      // Check [1,2,..20] contains each result
      values.forEach(value => {
        expect(allowedValues).toContain(value);
      });
    });
  });

  describe("The good, properly formatted cases (using Random.org)", () => {
    test("Works with 1d6, returns a properly formatted object within limits", async () => {
      const result = await roll("1d6", { useRandomOrg: true });
      // Assert the right object properties exist
      expect(result.total).toBeGreaterThanOrEqual(1);
      // @ts-ignore, I know it might not be defined, the test will show it
      expect(result.rolls.length).toBe(1);
      // @ts-ignore
      expect(result.rolls[0].order).toBe(1);
      // @ts-ignore
      expect(result.rolls[0].sides).toBe(6);
      // @ts-ignore
      expect(result.rolls[0].result).toBeGreaterThanOrEqual(1);
      // @ts-ignore
      expect(result.rolls[0].result).toBeLessThanOrEqual(6);
    });
    test("Works with a large number of throws (100)", async () => {
      const result = await roll("100d20", { useRandomOrg: true });
      // Expect 103 assertions cause checking each throw
      expect.assertions(103);
      // Expect the total of 100 throws of 20 side dice to be between 100 and 2000
      expect(result.total).toBeGreaterThanOrEqual(100);
      expect(result.total).toBeLessThanOrEqual(100 * 20);
      expect(result.rolls).toHaveLength(100);

      // Extract values, make sure they're all between 1 and 20
      // @ts-ignore
      const values = result.rolls.map(item => item.result);
      // Create a 'valid rolls' array, from 1 to 20 inclusive
      const allowedValues = Array.from(Array(21).keys()).slice(1);

      // Check [1,2,..20] contains each result
      values.forEach(value => {
        expect(allowedValues).toContain(value);
      });
    });
  });

  describe("The bad, badly formatted cases", () => {
    test("Returns a correct error whe n passed 'd2'", async () => {
      expect.assertions(1);
      try {
        await roll("d2");
      } catch (e) {
        expect(e).toBe(
          "Not a valid roll notation, needs to be integer, d, integer, e.g. 4d20"
        );
      }
    });
    test("Returns a correct error whe n passed '2d'", async () => {
      expect.assertions(1);
      try {
        await roll("2d");
      } catch (e) {
        expect(e).toBe(
          "Not a valid roll notation, needs to be integer, d, integer, e.g. 4d20"
        );
      }
    });
    test("Returns a correct error whe n passed 'abc'", async () => {
      expect.assertions(1);
      try {
        await roll("abc");
      } catch (e) {
        expect(e).toBe(
          "Not a valid roll notation, needs to be integer, d, integer, e.g. 4d20"
        );
      }
    });
  });

  describe("The bad, badly formatted cases (using Random.org)", () => {
    test("Returns a correct error whe n passed 'd2'", async () => {
      expect.assertions(1);
      try {
        await roll("d2", { useRandomOrg: true });
      } catch (e) {
        expect(e).toBe(
          "Not a valid roll notation, needs to be integer, d, integer, e.g. 4d20"
        );
      }
    });
    test("Returns a correct error whe n passed '2d'", async () => {
      expect.assertions(1);
      try {
        await roll("2d", { useRandomOrg: true });
      } catch (e) {
        expect(e).toBe(
          "Not a valid roll notation, needs to be integer, d, integer, e.g. 4d20"
        );
      }
    });
    test("Returns a correct error whe n passed 'abc'", async () => {
      expect.assertions(1);
      try {
        await roll("abc", { useRandomOrg: true });
      } catch (e) {
        expect(e).toBe(
          "Not a valid roll notation, needs to be integer, d, integer, e.g. 4d20"
        );
      }
    });
  });
});
