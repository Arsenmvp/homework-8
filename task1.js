function mul(...args) {
  let numbers = args.filter(arg => typeof arg === "number");
  if (numbers.length === 0) return 0;
  return numbers.reduce((acc, num) => acc * num, 1);
}

