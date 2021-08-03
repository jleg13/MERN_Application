//const { stockValidator } = require('../validator');
test('The most useless test ever - expect true to equal true', () => {
    expect(true).toEqual(true);
});
test('stockValidator - "AAPL" is a valid input', () => {
    expect(stockValidator("AAPL")).toEqual(true);
});
test('stockValidator - "GOOG" is an invalid input', () => {
    expect(stockValidator("GOOG")).toEqual(false);
});