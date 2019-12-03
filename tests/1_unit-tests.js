/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

var chai = require("chai");
var assert = chai.assert;
var ConvertHandler = require("../controllers/convertHandler.js");

var convertHandler = new ConvertHandler();

suite("Unit Tests", function() {
  suite("Function convertHandler.getNum(input)", function() {
    test("Whole number input", function(done) {
      var input = "32L";
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });

    test("Decimal Input", function(done) {
      var input = "4.67887";
      assert.equal(convertHandler.getNum(input), 4.67887);
      done();
    });

    test("Fractional Input", function(done) {
      var input = "2/5";
      assert.equal(convertHandler.getNum(input), 0.4);
      done();
    });

    test("Fractional Input w/ Decimal", function(done) {
      var input = "5.5/2.5";
      assert.equal(convertHandler.getNum(input), 2.2);
      done();
    });

    test("Invalid Input (double fraction)", function(done) {
      var input = "6/7/4";
      assert.equal(convertHandler.getNum(input), "invalid number");
      done();
    });

    test("No Numerical Input", function(done) {
      var input = "mi";
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });
  });

  suite("Function convertHandler.getUnit(input)", function() {
    test("For Each Valid Unit Inputs", function(done) {
      var input = [
        "gal",
        "l",
        "mi",
        "km",
        "lbs",
        "kg",
        "GAL",
        "L",
        "MI",
        "KM",
        "LBS",
        "KG"
      ];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele), ele.toLowerCase());
      });
      done();
    });

    test("Unknown Unit Input", function(done) {
      var input = ["gryewgy", "gfgrw", "23gff"];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele), "invalid unit");
      });
      //done();
    });
  });

  suite("Function convertHandler.getReturnUnit(initUnit)", function() {
    test("For Each Valid Unit Inputs", function(done) {
      var input = ["gal", "l", "mi", "km", "lbs", "kg"];
      var expect = ["l", "gal", "km", "mi", "kg", "lbs"];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.spellOutUnit(unit)", function() {
    test("For Each Valid Unit Inputs", function(done) {
      var input = ["gal", "l", "mi", "km", "lbs", "kg"];
      var expect = [
        "gallons",
        "liters",
        "miles",
        "kilometers",
        "pounds",
        "kilograms"
      ];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      }); //see above example for hint
      done();
    });
  });

  suite("Function convertHandler.convert(num, unit)", function() {
    test("Gal to L", function(done) {
      var input = [5, "gal"];
      var expected = 18.9271;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("L to Gal", function(done) {
      var input = [14, "L"];
      var expected = 3.69841;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("Mi to Km", function(done) {
      var input = [10, "Mi"];
      var expected = 16.0934;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("Km to Mi", function(done) {
      var input = [80, "Km"];
      var expected = 49.70982;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("Lbs to Kg", function(done) {
      var input = [43, "Lbs"];
      var expected = 19.50446;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("Kg to Lbs", function(done) {
      var input = [24, "Kg"];
      var expected = 52.91099;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });
  });
});
