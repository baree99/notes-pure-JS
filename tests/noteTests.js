describe('Notes', function() {
  var title = "First note";
  var text = "A bunch of test sentences.";
  var note = new Note(title, text);

  describe('note', function() {

    it('has a title', function() {
      expect(note.title()).isEqualTo("First note")
    });

    it('has text', function() {
      expect(note.text()).isEqualTo("A bunch of test sentences.")
    });

    it('has id', function() {
      expect(note.id()).isEqualTo(1)
    });

  });
});
