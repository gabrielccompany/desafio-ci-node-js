const { sum, sub, times, div } = require(`./index`);

test(`add 10 + 5 be equal 15`, () => {
    expect(sum(10, 5)).toBe(15);
});

test(`sub 10 - 5 be equal 5`, () => {
    expect(sub(10, 5)).toBe(5);
});

test(`times 10 * 5 be equal 50`, () => {
    expect(times(10, 5)).toBe(50);
});

test(`div 10 / 5 be equal 2`, () => {
    expect(div(10, 5)).toBe(2);
});