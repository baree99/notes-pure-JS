document.getElementById('newNote').addEventListener('submit', addNotes)

function addNotes(e) {

  var note = new Note(
    document.getElementById('noteTitle').value,
    document.getElementById('noteText').value
  )

  if (localStorage.getItem('notePad') === null) {
    var notePad = [];
    notePad.push(note);
    localStorage.setItem('notePad', JSON.stringify(notePad));
  } else {
    var notePad = JSON.parse(localStorage.getItem('notePad'));
    notePad.push(note);
    localStorage.setItem('notePad', JSON.stringify(notePad));
  }

  document.getElementById('newNote').reset();

  // presentNotes();

console.log(note);
e.preventDefault();
};
