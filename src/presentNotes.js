function presentNotes() {
  var notePad = JSON.parse(localStorage.getItem('notePad'));
  var noteList = document.getElementById('noteList');

  noteList.innerHTML = '';

  for (var i = 0; i < notePad.length; i++) {
    var title = notePad[i]._title;

    noteList.innerHTML   +=   '<div>'+
                              '<h6>Title: ' + title + '</h6>'+
                              '</div>';
  }
}
