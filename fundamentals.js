// How to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

// 2. Conditions
// 6 basic condition: >, <, ===, !==, <=, >=
// multiple conditions: &&, ||

if (fatherName === 'arnold' || season === 'rainy') {

}
else if (fatherName === 'Arnold') {

}
else {

}

// 3. array
// index, 
// length, push,
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

// 4. for loop
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
}

// 5. function
function mutiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

const output = mutiply(35, 78);

// 6.object 
// 3 ways to access property by name
const student = {
    name: 'salib Khan',
    age: 32,
    movies: ['King khan', 'Dhakar Mastan']
}

const myVariable = 'age';

console.log(student.age); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via property name variable
