(function(exports) {

  function testCircleRadiusDefaultsTo10() {
    var circle = new Circle();
    assert.isTrue(circle.radius === 10, "checks circle radius is 10");
  };

  function testIf1Plus1Is2() {
    assert.isTrue((1 + 1 === 2), "checks if 1 + 1 equals 2");
  };

  function testIf5BiggerThan6() {
    assert.isTrue((5 > 6), "checks if 5 is bigger than 6")
  };

  function testIf3SmallerThan5() {
    assert.isTrue((3 < 5), "3 should be smaller than 5")
  };

  testCircleRadiusDefaultsTo10();
  testIf1Plus1Is2();
  testIf5BiggerThan6();
  testIf3SmallerThan5()
})(this);

//
//
//
// function isNoteCorrect() {
//   var note = new Note("my first note");
//   assert.isTrue(note.firstNote === "my first note")
// }
//
//
// isNoteCorrect();
