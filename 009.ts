// Symbols
// it's a primitive type. Unique and immutable

const symbol = Symbol('my symbol');
const anotherSymbol = Symbol('another symbol');

symbol === anotherSymbol;
// This condition will always return 'false' since the types
// 'typeof symbol' and 'typeof anotherSymbol' have no overlap
