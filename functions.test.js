//to run this test file type `mocha functions.test.js`
const assert = require('assert');
const add = require('./functions/add.js');
describe("#add function", function(){
  it("should add 1,2,3 to make 6", function(){
    assert.equal(add(1,2,3), 6);
  });
  it("should add 3,2,1 to make 6", function(){
    assert.equal(add(3,2,1), 6);
  });
  it("should add 5 and 7 to make 12", function(){
    assert.equal(add(5,7), 12);
  });
  it("should add -4, 4, -3, -2 to make -5", function(){
    assert.equal(add(-4,4,-3,-2), -5);
  });
  it("should add 0 and -1 to make -1", function(){
    assert.equal(add(0, -1), -1);
  });
});
