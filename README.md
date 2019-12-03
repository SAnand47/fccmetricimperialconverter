**FreeCodeCamp**- Metric/Imperial Comverter
------

1) SET NODE_ENV to `test` without quotes
2) Most logic will need done in `controllers/convertHandler.js` but do complete `routes/api.js`
3) You will add any security features to `server.js`
4) You will create all of the functional/unit tests in `tests/2_functional-tests.js` and `tests/1_unit-tests.js`


<header>

# ISQA_2 - Metric/Imp Converter

</header>

<div id="userstories" style="margin-left: 5%; margin-top: 5%">

### User Stories

1.  I will help prevent the client from trying to guess(sniff) the MIME type.
2.  I will prevent cross-site scripting (XSS) attacks.
3.  I can **GET** `/api/convert` with a single parameter containing an accepted number and unit and have it converted.
4.  Hint: Split the input by looking for the index of the first character.
5.  I can convert 'gal' to 'L' and vice versa. **(1 gal to 3.78541 L)**
6.  I can convert 'lbs' to 'kg' and vice versa. **(1 lbs to 0.453592 kg)**
7.  I can convert 'mi' to 'km' and vice versa. **(1 mi to 1.60934 km)**
8.  If my unit of measurement is invalid, returned will be 'invalid unit'.
9.  If my number is invalid, returned with will 'invalid number'.
10.  If both are invalid, return will be 'invalid number and unit'.
11.  I can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.
12.  My return will consist of the initNum, initUnit, returnNum, returnUnit, and string spelling out units in format `{initNum} {initial_Units} converts to {returnNum} {return_Units}` with the result rounded to 5 decimals.
13.  All 16 unit tests are complete and passing.
14.  All 5 functional tests are complete and passing.

### Example usage:

`/api/convert?input=4gal`  
`/api/convert?input=1/2km`  
`/api/convert?input=5.4/3lbs`  
`/api/convert?input=kg`  

### Example return:

`{initNum: 3.1, initUnit: 'mi', returnNum: 5.0000008, returnUnit: 'km', string: '3.1 miles converts to 5.00002 kilometers'}`</div>

* * *

<div id="testui" style="margin-left: 5%">

## Front-End:

<form id="convertForm" class="border"><input type="text" id="convertField" name="input" placeholder="3.1mi" style="width: 200px"> <input id="convert" type="submit" value="Convert!"></form>

</div>

* * *

<script>$(function() { $('#convertForm').submit(function() { event.preventDefault(); $.ajax({ url: '/api/convert', type: 'get', data: $('#convertForm').serialize(), success: function(data) { $('#result').text(data.string || ("Error - "+ $('#convertField').val())); $('#result').css("font-size","16px"); $('#jsonResult').text(JSON.stringify(data)); } }); }); });</script>
