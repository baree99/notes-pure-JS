describe('Adding Notes', function() {
  const note = {
    name: "first note",
    text: "random text"
  }

  it('adds title to localstorage', function() {
    fillIn('noteTitle').with('DOoo');
    fillIn('noteText').with('Booooo');
    clickButton('submit');
    expect(localStorage.notePad).toContain('DOoo');
  });

});
