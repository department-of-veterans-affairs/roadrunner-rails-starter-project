//= require adder

// EXAMPLE JS SPEC
describe("Adder", function() {
  var result;

  describe("#plusThree", function() {
    it("adds 3 to number", function() {
      expect(Adder.plusThree(2)).to.eq(5);
    });
  });
});