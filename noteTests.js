(function(exports) {
  //
  // function testIf1Plus1Is2() {
  //   assert.isTrue((1 + 1 === 2), "checks if 1 + 1 equals 2");
  // };
  //
  // function testIf5BiggerThan6(a, b) {
  //   assert.isTrue((a > b), "checks if 5 is bigger than 6")
  // };
  //
  // function testIf3SmallerThan5() {
  //   assert.isTrue((3 < 5), "3 is smaller than 5")
  // };
  //
  // function testIf3Equal3() {
  //   assert.isEqualTo(3, 3, "3 is equal to 3")
  // };
  //
  // function arrayContainElement(a, b) {
  //   assert.isContain(a, b, "Array of numbers contain 3")
  // }
  //
  // function stringContainString(a, b) {
  //   assert.isContain(a, b, "'String' contains 'tr'")
  // }

  // testIf1Plus1Is2();
  // testIf5BiggerThan6(5, 6);
  // testIf3SmallerThan5();
  // testIf3Equal3();
  // arrayContainElement([1,2,3],3);
  // stringContainString("String", "tr")

//   function testIf1Plus1Is2() {
//     expect(1 === 1).isTrue;
//   };
//
// testIf1Plus1Is2()


describe("test1", function() {
it("'String' contain with a 'tr'", function() {
  expect("string").isContain("tr")
  it("array contain element", function() {
    expect([1,2,3]).isContain(2)
  });
});
});

describe("test2", function() {
it("2+2 equal 4", function() {
  expect(2+2).isEqualTo(4)
});
it("fails false is not true", function() {
  expect(false).isTrue()
});
});

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

// })
