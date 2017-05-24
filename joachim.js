
var parentElement = document.getElementById("div1");

var test = {};


(function(obj) {

  obj.divId = 0

  obj.isTrue = function() {
    result(obj.value)
  },

  obj.isEqualTo = function(value2) {
    result(obj.value === value2)
  },

  obj.isContain = function(value2) {
      result(obj.value.includes(value2))
  },

  obj.suiteDescription = function(desc) {
    obj.divId += 1
    var describeTitle = document.getElementById("div1")
    describeTitle.innerHTML += "<div id=" + test.divId +"><h4>" + desc + "</h4></div>"

  }

  function result(assertion) {
    var result = (assertion) ? "Pass" : "Fail";
    printTestResult(result)
  }

  function printTestResult(result) {
    var tickorx = (result === "Pass") ?  "&#10004 " : "&#10008 "
    var itText = document.getElementById(test.divId)
    itText.innerHTML += "<li class=" + result +"> " + tickorx + obj.description + "</li>"
  }
})(test);

function expect(value) {
  test.value = value
  return test
}

function it(testDescription, method) {
  test.description = testDescription
  method()
}

function describe(suiteDescription, method) {
  test.suiteDescription(suiteDescription)
  method()
}
