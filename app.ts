// working with fucntions and variables

const addNumbers = (number1: number, number2: number): number => {
  return number1 + number2;
};

console.log(addNumbers(5, 9));

// working with objects
type nestedObjType = {
  name: string;
  dob: string;
  tags: string[];
  info: {
    desc: string;
    imgUrl: string;
    price: number;
    cart: {
      isInCart: boolean;
      cartProducts: {
        id: number;
        productName: string;
        productDesc: string;
      }[];
    };
  };
  user: {
    address: string;
    phone: string;
  };
};

const dummyData: nestedObjType = {
  name: "John Doe",
  dob: "1990-01-01",
  tags: ["tag1", "tag2"],
  info: {
    desc: "Lorem ipsum dolor sit amet.",
    imgUrl: "https://example.com/image.jpg",
    price: 19.99,
    cart: {
      isInCart: true,
      cartProducts: [
        {
          id: 1,
          productName: "Product 1",
          productDesc: "Description for Product 1",
        },
        {
          id: 2,
          productName: "Product 2",
          productDesc: "Description for Product 2",
        },
      ],
    },
  },
  user: {
    address: "123 Main St, Cityville",
    phone: "+1 123-234-3456",
  },
};

console.log(dummyData);

for (let key in dummyData.user) {
  console.log(dummyData.user[key]);
}

// playing with types

// enums
enum ResType {
  Number,
  Text,
}

// type alias
type Combinable = number | string;

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultType: ResType
) => {
  let result: string | number;
  // check for number
  if (typeof input1 === "number" && typeof input2 === "number") {
    // input is a number
    result = input1 + input2;
    // check for type of result wanted
    if (resultType === ResType.Number) {
      // want number
      return +result.toFixed(2);
    } else {
      // want string
      return result.toFixed(2).toString();
    }
  } else {
    // input is a string
    result = input1.toString() + input2.toString();
    // check for type of result wanted
    if (resultType === ResType.Text) {
      return result.toString();
    } else {
      return "String Input cannot be converted to Number";
    }
  }
};

let call1 = combine(10.2, 15.78, ResType.Number);
console.log(call1);

let call2 = combine(10.2, 15.78, ResType.Text);
console.log(call2);

let call3 = combine("Bhargav", "Kashiya", ResType.Text);
console.log(call3);

let call4 = combine("Bhargav", "Kashiya", ResType.Number);
console.log(call4);
