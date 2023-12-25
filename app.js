// working with fucntions and variables
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(5, 9));
var dummyData = {
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
for (var key in dummyData.user) {
    console.log(dummyData.user[key]);
}
// playing with types
// enums
var ResType;
(function (ResType) {
    ResType[ResType["Number"] = 0] = "Number";
    ResType[ResType["Text"] = 1] = "Text";
})(ResType || (ResType = {}));
var combine = function (input1, input2, resultType) {
    var result;
    // check for number
    if (typeof input1 === "number" && typeof input2 === "number") {
        // input is a number
        result = input1 + input2;
        // check for type of result wanted
        if (resultType === ResType.Number) {
            // want number
            return +result.toFixed(2);
        }
        else {
            // want string
            return result.toFixed(2).toString();
        }
    }
    else {
        // input is a string
        result = input1.toString() + input2.toString();
        // check for type of result wanted
        if (resultType === ResType.Text) {
            return result.toString();
        }
        else {
            return "String Input cannot be converted to Number";
        }
    }
};
var call1 = combine(10.2, 15.78, ResType.Number);
console.log(call1);
var call2 = combine(10.2, 15.78, ResType.Text);
console.log(call2);
var call3 = combine("Bhargav", "Kashiya", ResType.Text);
console.log(call3);
var call4 = combine("Bhargav", "Kashiya", ResType.Number);
console.log(call4);
