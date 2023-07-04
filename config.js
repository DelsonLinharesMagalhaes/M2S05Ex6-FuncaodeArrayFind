const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);


const inventory = [
    {name: 'maças', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

const result = inventory.find( fruit => fruit.name === 'cherries' );

console.log(result)