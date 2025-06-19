function mul(a) {
  return function(b) {
    return a * b;
  };
}

let doubleMul = mul(2);
let quadraMul = mul(4);

// Приклади:
console.log(doubleMul(5)); // 10
console.log(quadraMul(3)); // 12
