//1
const pizza = ["pepperoni", "mushroom", "mango", "pineapple"];

const mango = pizza[2];

for (let i = 0; i < 4; i++) {
    console.log(pizza[i]);
    if (i == 2) {
        console.log("(why would you put " + mango + " on pizza)");
    }
}


//2
const Pizza = [

    {
        name: "cheese",
        size: 4,
        price: 8
    },


    {
        name: "pepperoni",
        size: 4,
        price: 9
    }

]

const [cheese, pepperoni] = Pizza;

console.log("The price of a " + cheese.name + " pizza is $" + cheese.price);


//3
let LOG = console.log;

const PIZZA = {
    pepperoni: "solid 5",
    array: [
        1,
        2,
        3,
    ],
    functionTime: function (name) {
        LOG(`${name}'s CONSOLE LOG TIME`);
    }
}

LOG(PIZZA.array);
PIZZA.functionTime("Brenden")


const {
    place, //usually it is better to just declare them all in the same place
    holder,
    functionTime
} = PIZZA;

functionTime("Pidge");


//4
var dogType = "doggo";
var dog = {
    [dogType + 'Bark']() {
        LOG("I am " + dogType + "!!!")
    }
}

const {
    doggoBark
} = dog;

doggoBark()