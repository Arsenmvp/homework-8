let user = {
  name: "John"
};

function format(start, end) {
  console.log(`${start}${this.name}${end}`);
}

// Варіант 1 – через обгортку:
let f1 = function() {
  format.call(user, "<<<", ">>>");
};
f1(); // <<<John>>>

// Варіант 2 – через bind:
let f2 = format.bind(user, "<<<", ">>>");
f2(); // <<<John>>>
