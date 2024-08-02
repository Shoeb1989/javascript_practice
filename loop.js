const numbers = [4, 5, 6, 8, 9];
const total = numbers.reduce((previous, current) => 
    previous + current,0);

console.log(total);

const product = [
    {id : 1, name: 'hp',price: 65000},
    {id : 2, name: 'asus',price: 62000},
    {id : 3, name: 'dell',price: 67000},
    {id : 3, name: 'lenevo',price: 165000},
]


// map
const names = product.map(product => product.name)
console.log(names);

const prices =product.map(product => product.price)
console.log(prices);

// filter

const expensive = product.filter(product => product.price > 65000)
console.log(expensive);



