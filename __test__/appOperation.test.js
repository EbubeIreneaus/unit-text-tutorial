const appOperations = require('../src/appOperation')

test("multiplication of 0", () => {
    expect(appOperations(20, 0)).toBe(0)
})

test('multiplication by 10', () => {
    expect(appOperations(10, 20)).toBe(200)
});

test('multiplication of 3', () => {
    expect(appOperations(20, 3)).toBe(60)
});