const sum = (a, b) => a + b;
describe('Math', () => {
    test('2 + 2 = 4', () => {
        expect(sum(2, 2)).toBe(4);
    })
});