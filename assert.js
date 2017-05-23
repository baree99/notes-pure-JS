var parentElement = document.getElementById("div1");

var assert = {
  isTrue: function(assertionToCheck, testDescription) {
    result(assertionToCheck, testDescription)
  },

  isEqualTo: function(a, b, testDescription) {
    result((a === b), testDescription)
  },

  isContain: function(a, b, testDescription) {
      result(a.includes(b), testDescription)
  }

  }
  function result(testFunction, testDescription) {
    var result = (testFunction) ? "Pass" : "Fail";
    printTestResult(result, testDescription)
  }

  function printTestResult(result, testDescription) {
    // var node = document.createTextNode(`${result}: ${testDescription}`)
    // var para = document.createElement("p")
    // para.appendChild(node);
    // parentElement.appendChild(para);
    document.write("<p class=" + result + "> " + testDescription "</p>")

};
