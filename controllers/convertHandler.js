/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function(input) {
    var result = input.match(/[A-Za-z]/);

    if (result) {
      var out = input.slice(0, input.indexOf(result.join("")));
       console.log(out)
       //-- check for double slash and double dot in initNum 
      if (out.indexOf("/") != out.lastIndexOf("/")) {
        return "invalid number";
      }
      if (
        out.indexOf(".") != out.lastIndexOf(".") &&
        out.indexOf("/") === -1
      ) {
        return "invalid number";
      }

       if (out.indexOf("/") != -1) {
        let topPart = out.slice(0, out.indexOf("/"));
        let botPart = out.slice(out.indexOf("/") + 1, out.length);
        //console.log(topPart,botPart);
        if (topPart.indexOf(".") != topPart.lastIndexOf(".")) {
          return "invalid number";
        }
        if (botPart.indexOf(".") != botPart.lastIndexOf(".")) {
          return "invalid number";
        }
      } 
      //-- if out is empty, change out to 1
      if (out === "") {
        out = 1;
      }
      return parseFloat(eval(out).toFixed(5))
    } else {
      return input;
    }
  };

  this.getUnit = function(input) {
    var result = input.match(/[A-Za-z]/g);

    if (!result) {
      return "no unit";
    }
    if (
      result &&
      (result.join("").toLowerCase() === "gal" ||
        result.join("").toLowerCase() === "lbs" ||
        result.join("").toLowerCase() === "mi" ||
        result.join("").toLowerCase() === "l" ||
        result.join("").toLowerCase() === "kg" ||
        result.join("").toLowerCase() === "km")
    ) {
      return result.join("");
    } else {
      return "invalid unit";
    }
  };

  this.getReturnUnit = function(initUnit) {
    var result;

    switch (initUnit.toLowerCase()) {
      case "gal":
        result = "l";
        break;
      case "lbs":
        result = "kg";
        break;
      case "mi":
        result = "km";
        break;
      case "l":
        result = "gal";
        break;
      case "kg":
        result = "lbs";
        break;
      case "km":
        result = "mi";
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    let obj = {
      gal: "gallons",
      lbs: "pounds",
      mi: "miles",
      l: "liters",
      kg: "kilograms",
      km: "kilometers"
    };
    result = obj[unit];
    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    switch (initUnit.toLowerCase()) {
      case "gal":
        result = Number((initNum) * galToL).toFixed(5);
        break;
      case "lbs":
        result = Number((initNum) * lbsToKg).toFixed(5);
        break;
      case "mi":
        result = Number((initNum) * miToKm).toFixed(5);
        break;
      case "l":
        result = Number((initNum) / galToL).toFixed(5);
        break;
      case "kg":
        result = Number((initNum) / lbsToKg).toFixed(5);
        break;
      case "km":
        result = Number((initNum) / miToKm).toFixed(5);
        break;
    }
    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result =
      initNum +
      " " +
      this.spellOutUnit(initUnit) +
      " converts to " +
      returnNum +
      " " +
      this.spellOutUnit(returnUnit);
    return result;
  };
}

module.exports = ConvertHandler;
