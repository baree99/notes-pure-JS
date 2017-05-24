document.getElementById('newNote').addEventListener('submit', addNotes)

function addNotes(e) {
  var noteId = 1;

  var note = new Note(
    document.getElementById('noteTitle').value,
    document.getElementById('noteText').value
  )


console.log(note);
e.preventDefault();
};
