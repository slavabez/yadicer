declare function roll(input: string): Promise<rollResults>;
interface rollResults {
  total: number;
  rolls: [singleRoll];
}

interface singleRoll {
  order: number;
  sides: number;
  result: number;
}

export default roll;