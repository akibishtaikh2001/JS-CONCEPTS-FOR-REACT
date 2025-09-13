// 1. jason => stringify, parse
const student = {
    name: 'salib Khan',
    age: 32,
    movies: ['King khan', 'Dhakar Mastan']
}

const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentobj = JSON.parse(studentJSON);
// console.log(studentobj);


// 2. fetch

fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// loop on an object for in 

// add or remove from an array
const products = [
    { name: 'laptop', price: 3200, brand: 'lenevo', color: 'silver' },
    { name: 'Phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' },

];


const newProduct = { name: 'webcame', price: 700, brand: 'Lal' };


// copy products array and then  add a newProduct
const newProducts = [...products, newProduct];
// create a new array without one specific item
// remove phone means creat a new array without the phone

const remaining = products.filter(p => p.name !== 'Phone');