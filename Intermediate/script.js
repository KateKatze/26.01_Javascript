// car sorting

carbrands = ['Tesla', 'Audi', 'Renault', 'Volvo', 'Mazda', 'Fiat', 'Ferrari']

console.log(carbrands.sort());

// fruits sorting

fruits = ['apple', 'banana', 'kiwi'];
fruits.push('orange');
console.log(fruits);

fruits.pop("orange");
console.log(fruits);

// console.log(fruits + ", orange");
// animals = [' dog',' horse',' monkey'];
// console.log("cat," + animals);

animals = ['monkey', 'horse', 'dog'];
console.log(animals);

animals.sort();
console.log(animals);

animals.unshift('cat');
console.log(animals);

// deleting the / and put the spaces between fruits

var fruits = ("mango/cherries/kiwi/grapes/pear/peach/orange/lemon");

console.log(fruits);

fruits = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";

document.write(fruits.split("/").join("<br><br>"));

fruitsarray = fruits.split("/");

for (let i = 0; i < fruitsarray.length; i++) {
    console.log(fruitsarray[i])
}