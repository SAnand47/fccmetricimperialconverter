/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

var expect = require("chai").expect;
var ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function(app) {
  var convertHandler = new ConvertHandler();

  app.route("/api/convert").get(function(req, res) {
    var input = req.query.input;
    if(!input){return res.json({error: "invalid number and unit"})}
    if(/[a-z][0-9]/.test(input)){return res.json({error: "invalid number"})}

    var initNum = convertHandler.getNum(input);
    
    console.log(initNum)

    // if (initNum==='invalid number'){return res.json({error: "invalid number"})}    
    
    var initUnit = convertHandler.getUnit(input);
    console.log(initUnit)
    if (initNum==='invalid number'&& initUnit==="invalid unit"){return res.json({error: "invalid number and unit"})}
    if (initNum==='invalid number'){return res.json({error: "invalid number"})} 
    if(initUnit==="invalid unit"){return res.json({error: "invalid unit"})}
    if(initUnit==="no unit"){return res.json({error: "no unit"})}
 
    

    var returnNum = convertHandler.convert(initNum, initUnit);
    var returnUnit = convertHandler.getReturnUnit(initUnit);
    var toString = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );
    return res.json({initNum:initNum,initUnit:initUnit,returnNum:returnNum,returnUnit:returnUnit,string:toString})
    //res.json
  });
};
