function presentNotes() {
  var notePad = JSON.parse(localStorage.getItem('notePad'));
  var noteList = document.getElementById('noteList');

  noteList.innerHTML = '';

  for (var i = 0; i < notePad.length; i++) {
    var title = notePad[i]._title;
    var text = notePad[i]._text;

    noteList.innerHTML   +=   '<div>'+
                              '<a href="#' + i + '"><h6> ' + title + '</h6></a>'+
                              '</div>';

  }


}


makeUrlShowNote();
console.log(getTextFromStorage());


function makeUrlShowNote() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
}

function showNoteForCurrentPage() {
  showNote(getTitleFromStorage());
  showtext(getTextFromStorage());
};

function getNoteFromUrl(location) {
  return location.hash.split('#')[1];
};

function getTitleFromStorage() {
  var notePad = JSON.parse(localStorage.getItem('notePad'));
  return notePad[window.location.hash.split('#')[1]]._title;
}

function getTextFromStorage() {
  var notePad = JSON.parse(localStorage.getItem('notePad'));
  return notePad[window.location.hash.split('#')[1]]._text;
}

function showNote(noteIndex) {
  document.getElementById("titleDisplay").innerHTML = noteIndex;
  console.log(noteIndex);

}
function showtext(noteIndex) {
  document.getElementById("noteDisplay").innerHTML = noteIndex;
  console.log(noteIndex);
}
