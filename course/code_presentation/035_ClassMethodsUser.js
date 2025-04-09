class User {
  constructor(name) {
      this.name = name;

      // Bind the class method so `this` is always right
      this.sayNameBound = this.sayNameMethod.bind(this);
  }

  sayNameMethod() {
      console.log(`Name: ${this.name}`);
  }

  // Stage 3 "Class Properties" syntax - arrows autobind!
  sayNameArrow = () => {
      console.log(`Name: ${this.name}`);
  }
}

let joe = new User("Joe");
let { sayNameMethod } = joe;

// Bind the method separately if you're planning to use it this way
let sayNameMethodBound = joe.sayNameMethod.bind(joe);
sayNameMethodBound(); // Works - now it's bound to `joe`

joe.sayNameBound(); // Works - bound function
joe.sayNameArrow(); // Also works - bound via Class Properties arrow