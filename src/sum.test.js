const s = require('./sum');

test("sum 3, 2 to be equal 5", () => {
    expect(s(3,2)).toBe(5);
})