class MyClass {};

const MyOtherClass = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  myMethod() {
    console.log(this.name);
  }
};

const myObj = new MyOtherClass('andy', 9);
console.log(myObj);
myObj.myMethod();
