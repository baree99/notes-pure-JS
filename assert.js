var parentElement = document.getElementById("div1");

var assert = {
  isTrue: function(assertionToCheck, testDescription) {
    if (!assertionToCheck) {
      var node = document.createTextNode(`Fail: ${testDescription}`)
      var para = document.createElement("p");
      para.appendChild(node);
      parentElement.appendChild(para);

    } else {
      var node = document.createTextNode(`Pass: ${testDescription}`)
      var para = document.createElement("p");
      para.appendChild(node);
      parentElement.appendChild(para);

    }
  }
};
