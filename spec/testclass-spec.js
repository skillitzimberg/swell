import { TestClass } from './../src/testclass';

describe('TestClass', function() {
  it('getMessage should return message', function() {
    let testClass = new TestClass();
    expect(testClass.getMessage()).toEqual('swell is working.');
  });
});
