class TestOne {
  constructor(b: number, j: boolean, x?: string) {}
  // b: number;
  // j: boolean;
  // x?: string
}

class TestTwo {
  execute(rules: TestOne): TestOne[]  {
    console.log(rules);
    return [rules];
  }
}

// const noType = { b: 1, j: "", x: 'dsdsd'}
var person: [number, string, boolean] = [1, "Steve", true];
const noType = new TestOne(1, true, "dsdsd");
const out = new TestTwo();
out.execute(noType);
