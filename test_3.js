const getSum = (a, b) => (b ? getSum(a ^ b, (a & b) << 1) : a);

console.log(getSum(2, 3));
