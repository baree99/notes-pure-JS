(function visitPage(address) {
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000', true);
xhr.responseType = 'document';
xhr.send();
xhr.onload = function(e) {
    doc = e.target.responseXML;
};)

function (e) {
    doc = e.target.responseXML;
}
}

doc.documentElement.innerText.includes("whatever");
