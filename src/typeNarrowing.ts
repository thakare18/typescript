
// example of type narrowing using discriminated unions
type MasalaChai = {
  type: "masala";
  spiceLevel: number;
};

type GingerChai = {
  type: "ginger";
  amount: number;
};

type ElaichiChai = {
  type: "elaichi";
  aroma: number;
};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function makeChai(order: Chai): string {
  switch (order.type) {
    case "masala":
      return `Masala Chai with spice level ${order.spiceLevel}`;

    case "ginger":
      return `Ginger Chai with ginger amount ${order.amount}`;

    case "elaichi":
      return `Elaichi Chai with aroma level ${order.aroma}`;

    default:
      // Exhaustiveness check
      const _exhaustiveCheck: never = order;
      return _exhaustiveCheck;
  }
}


// example of type narrowing using instanceof

class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}