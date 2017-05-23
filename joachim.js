
var parentElement = document.getElementById("div1");

var test = {};


(function(obj) {

  obj.isTrue = function() {
    result(obj.value)
  },

  obj.isEqualTo = function(value2) {
    result(obj.value === value2)
  },

  obj.isContain = function(value2) {
      result(obj.value.includes(value2))
  }

  function result(assertion) {
    var result = (assertion) ? "Pass" : "Fail";
    printTestResult(result)
  }

  function printTestResult(result) {
    var color = (result === "Pass") ? "green" : "red"
    console.log(obj.description)
    // var node = document.createTextNode(`${result}: ${obj.description}`)
    // var para = document.createElement("p")
    // // para.style.getElementByTagName("p")[0].setAttribute("class", "pass");
    // para.style.color = color
    // para.appendChild(node);
    // parentElement.appendChild(para);
    // document.createElement("div")
    var describeTitle = document.getElementById("div1")
    describeTitle.innerHTML = "<div id=testclass>" + obj.suiteDescription + "</div>"
    var itText = document.getElementById("testclass")
    itText.innerHTML += "<p class=itdesc>" + obj.description + "</p>"
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
  test.divId
  test.suiteDescription = suiteDescription
  method()
}
