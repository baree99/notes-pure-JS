describe('Adding Notes', function() {
  const note = {
    name: "first note",
    text: "random text"
  }

  it('adds title to localstorage', function() {
    document.getElementById('noteTitle').value="foo"
    document.getElementById('noteText').value="bar"
    document.getElementById('submit').click()
    expect(localStorage.notePad).isContain("foo")
  });

});
