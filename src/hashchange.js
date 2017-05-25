showFullTextAfterClickedLink();

function showFullTextAfterClickedLink() {
  window.addEventListener("hashchange", showFullText);
};

function showFullText(allNotesFunction) {
  var titleToMatch = getTitleFromUrl();
  var textToShow = ""
  var notes = JSON.parse(localStorage.getItem('notes'));
  notes.forEach(function(note) {
    if(titleToMatch == note._title) {
      textToShow = note._text
    }
  });
  document.write(textToShow)
};

function getTitleFromUrl() {
  return title = window.location.hash.split("#")[1]
};
