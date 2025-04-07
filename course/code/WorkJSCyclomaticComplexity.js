//---------------------------------------------------------------------------------------------------------
// ###  Cyclomatic Complexity
// https://artesoftware.com.br/2019/02/09/complexidade-ciclomatica/
console.log("Cyclomatic Complexity ");
function priceCoffee(premium, express, special) {
  var preco = 0;
  if (premium) {
    preco = 20;
    if (express) {
      preco = preco + 2;
      if (special) {
        preco = preco + 2;
      }
    } else if (special) {
      preco = preco + 2;
    }
  } else {
    preco = preco + 17;
    if (express) {
      preco = preco + 2;
      if (special) {
        preco = preco + 2;
      }
    } else if (special) {
      preco = preco + 2;
    }
  }
  return preco;
}

const assertEquals = (actual, expected, message) => {
  if (actual === expected) return;
  else console.log(`${message}: ${actual} is NOT equal to ${expected}!`);
};

assertEquals(17, priceCoffee(false, false, false), "A - Coffee Normal");
assertEquals(
  19,
  priceCoffee(false, false, true),
  "A - Coffee Normal and special"
);

assertEquals(
  19,
  priceCoffee(false, true, false),
  "A - Coffee Normal and express"
);
assertEquals(
  21,
  priceCoffee(false, true, true),
  "A - Coffee Normal and express and especial"
);

assertEquals(20, priceCoffee(true, false, false), "A - Coffee Premium");
assertEquals(
  22,
  priceCoffee(true, false, true),
  "A - Coffee Premium and special"
);

assertEquals(
  22,
  priceCoffee(true, true, false),
  "A - Coffee Premium and express"
);
assertEquals(
  24,
  priceCoffee(true, true, true),
  "A - Coffee Premium and express and especial"
);

///---------------------------------------------------------------------------------------------------------
// ###  Cyclomatic Complexity Refactory - Methods

function priceCoffeeRefactory(
  premium = false,
  express = false,
  special = false
) {
  var preco = 0;
  preco = premium ? 20 : 17; //One Linear
  preco = preco + computePriceExpressCoffee(express);
  preco = preco + computePriceSpecialCoffee(special);
  return preco;
}

function computePriceExpressCoffee(express = false) {
  return express ? 2 : 0; //One Linear
}

function computePriceSpecialCoffee(special = false) {
  return special ? 2 : 0; //One Linear
}

assertEquals(
  17,
  priceCoffeeRefactory(false, false, false),
  "B - Coffee Normal"
);
assertEquals(
  19,
  priceCoffeeRefactory(false, false, true),
  "B - Coffee Normal and special"
);

assertEquals(
  19,
  priceCoffeeRefactory(false, true, false),
  "B - Coffee Normal and express"
);
assertEquals(
  21,
  priceCoffeeRefactory(false, true, true),
  "B - Coffee Normal and express and especial"
);

assertEquals(
  20,
  priceCoffeeRefactory(true, false, false),
  "B - Coffee Premium"
);
assertEquals(
  22,
  priceCoffeeRefactory(true, false, true),
  "B - Coffee Premium and special"
);

assertEquals(
  22,
  priceCoffeeRefactory(true, true, false),
  "B - Coffee Premium and express"
);
assertEquals(
  24,
  priceCoffeeRefactory(true, true, true),
  "B - Coffee Premium and express and especial"
);

///---------------------------------------------------------------------------------------------------------
// ###  Cyclomatic Complexity Refactory - Method Chain

function CoffeePrice(
  price = 0,
  premium = false,
  express = false,
  special = false
) {
  this.price = price;
  this.premium = premium;
  this.express = express;
  this.special = special;
}

CoffeePrice.prototype = {
  resetPrice: function () {
    this.price = 0;
    return this;
  },
  addPremium: function (premium) {
    this.premium = premium;
    this.price = this.price + (premium ? 20 : 17); //One Linear
    return this;
  },
  addExpress: function (express) {
    this.express = express;
    this.price = this.price + (express ? 2 : 0); //One Linear
    return this;
  },
  addSpecial: function (special) {
    this.special = special;
    this.price = this.price + (special ? 2 : 0); //One Linear
    return this;
  },
  log: function () {
    // console.log("Price: "+ this.price);
    return this;
  },
};

// ### check Price
var priceOne = new CoffeePrice();
assertEquals(
  17,
  priceOne
    .resetPrice()
    .addPremium(false)
    .addExpress(false)
    .addSpecial(false)
    .log().price,
  "C - Coffee Normal"
); //One Linear
assertEquals(
  19,
  priceOne
    .resetPrice()
    .addPremium(false)
    .addExpress(false)
    .addSpecial(true)
    .log().price,
  "C - Coffee Normal and special"
); //One Linear

assertEquals(
  19,
  priceOne
    .resetPrice()
    .addPremium(false)
    .addExpress(true)
    .addSpecial(false)
    .log().price,
  "C - Coffee Normal and express"
); //One Linear
assertEquals(
  21,
  priceOne
    .resetPrice()
    .addPremium(false)
    .addExpress(true)
    .addSpecial(true)
    .log().price,
  "C - Coffee Normal and express and especial"
); //One Linear

assertEquals(
  20,
  priceOne
    .resetPrice()
    .addPremium(true)
    .addExpress(false)
    .addSpecial(false)
    .log().price,
  "C - Coffee Premium"
); //One Linear
assertEquals(
  22,
  priceOne
    .resetPrice()
    .addPremium(true)
    .addExpress(false)
    .addSpecial(true)
    .log().price,
  "C - Coffee Premium and special"
); //One Linear

assertEquals(
  22,
  priceOne
    .resetPrice()
    .addPremium(true)
    .addExpress(true)
    .addSpecial(false)
    .log().price,
  "C - Coffee Premium and express"
); //One Linear
assertEquals(
  24,
  priceOne.resetPrice().addPremium(true).addExpress(true).addSpecial(true).log()
    .price,
  "C - Coffee Premium and express and especial"
); //One Linear
