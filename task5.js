function myBind(func, context, ...args) {
  return function(...moreArgs) {
    return func.apply(context, [...args, ...moreArgs]);
  };
}

// Приклад використання:
let obj = { name: "Anna" };

function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

let boundGreet = myBind(greet, obj, "Hello");
boundGreet(); // Hello, Anna
