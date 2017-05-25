var form = document.getElementById("form-button").addEventListener('click', function(e){
  e.preventDefault();
  var title = document.getElementById("noteID").value;
  var text = document.getElementById("noteText").value;
  saveNote(title, text);
  printNotes(allNotes);
}, false);
