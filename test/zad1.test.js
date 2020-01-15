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
const CoffeMachine = require("./../zad1");
/** Init App class object */

let coffeAmount = 20;
let waterAmmount = 30;
let powerStatus = true;

let testApp = new CoffeMachine(coffeAmount, waterAmmount, powerStatus);

describe("CoffeMachine unit test", function() {
  describe("Test za tipove varijable", function() {
    it("coffeAmount i waterStatus moraju biti brojevi, a powerStatus boolean", function() {
      assert.isNumber(testApp.coffeAmount);
      assert.isNumber(testApp.waterAmmount);
      assert.isBoolean(testApp.powerStatus);
    });
    it("je li robot ukljucen", function() {
      assert.exists(testApp.turnMachineOn());
      assert.exists(testApp.turnMachineOff());
    });
    it("je li vec ukljucen", function() {
      testApp.turnMachineOn();
      assert.equal(testApp.turnMachineOn(), true);
    });
    it("je li vec ugasen", function() {
      testApp.turnMachineOff();
      assert.equal(testApp.turnMachineOff(), false);
    });
    it("nadopuni kafu sa numerickim brojevima", function() {
      assert.equal(testApp.refill(10, 35), 200);
    });
    it("nadopuni kafu sa krivim tipovima", function() {
      assert.throws(() => testApp.refill(20, "bok"), Error);
    });
    it("napravi kavu", function() {
      let coffe = new CoffeMachine(10, 20, true);
      coffe.makeCoffe();
    });
    it("nema dovoljno vode i kave", function() {
      let coffe = new CoffeMachine(1, 1, true);
      assert.equal(coffe.makeCoffe(), "Ne smije omogucit pravljenje kave");
    });
  });
});
