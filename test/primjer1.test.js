/**************************************
List of assert methods -   http://chaijs.com/api/assert/#method_assert
fail(actual, expected, msg)
equal(a, b)
notEqual
isAbove     isAtLeast
isBelow     isAtMost
typeOf
isOk        strictEqual         deepEqual
isNotOk     strictNotEqual      deepNotEqual
isTrue      isNotTrue
isFalse     isNotFalse
isNull      isNaN           isNotNull       isNotNaN
exists      notExists
isUndefined isDefined
isFunction  isObject    isArray isString    isNumber
isBoolean
instanceOf
match       notMatch        <-- regular expressions
property    notProperty
propertyVal notPropertyVal
lengthOf
hasAnyKeys  hasAllKeys      containsAllKeys <!--- in objects
throws      doesNotThrow
closeTo     approximately
oneOf       <--- look in an array
changes     doesNotChange
increases   increasesBy     increasesButNotBy
decreases   decreasesBy     decreasesButNotBy
**************************************/

const assert = require("chai").assert;
/** Import simple App class */
const RandomGenerator = require("./../primjer1");
/** Init App class object */

let quotes = ["test 12345", "Jos malo pa gotovo", "Mdaa"];

let testApp = new RandomGenerator(quotes);

describe.skip("Random Generator unit test", function() {
  describe.skip("newQuote() metoda", function() {
    it("newQuote() vraca recenicu znakovnog tipa", function() {
      let status = testApp.newQuote();
      assert.isString(status);
    });

    it("newQuote() vraca poruku ukoliko nema recenica u polju", function() {
      let emptyField = [];
      let innerTestApp = new RandomGenerator(emptyField);

      assert.isString(innerTestApp.newQuote());
      assert.equal(innerTestApp.newQuote(), "Nema recenica u polju");
    });
  });
});
