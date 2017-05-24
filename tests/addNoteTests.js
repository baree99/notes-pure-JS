describe('Adding Notes', function() {
  const note = {
    name: "first note",
    text: "random text"
  }

  it('adds title to localstorage', function() {
    addNotes(note);
    var localstorage = localstorage.Note;
    expect(localstorage).isContain(note.title)
  });

  it('adds not text to localstorage', function() {
    addNotes(note);
    var localstorage = localstorage.Note;
    expect(localstorage).isContain(note.text)
  });


});
