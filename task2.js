let user = {
  name: "Tom"
};

function sayHi() {
  console.log(`Hi, ${this.name}`);
}

function sayBye() {
  console.log(`Bye, ${this.name}`);
}

sayHi.call(user);   // Hi, Tom
sayBye.apply(user); // Bye, Tom
