// Missing initializer in const declaration Error in JS

// EXAMPLE 1 - Use `let` to declare variables that can be reassigned

// ✅ let = can be reassigned
let country;
country = 'Chile';

// ✅ const = Set value upon declaration
const age = 30;

// ------------------------------------------------------------------

// // EXAMPLE 2 - Variables declared using `let` cannot be redeclared

// let age;

// age = 30;

// console.log(age); // 👉️ 30

// age = 31;

// console.log(age); // 👉️ 31

// ------------------------------------------------------------------

// // EXAMPLE 3 - Set the value on the same line when using `const`

// // ✅ Works
// const country = 'Chile';
// console.log(country);

// ------------------------------------------------------------------

// // EXAMPLE 4 - The `const` keyword doesn't make objects and arrays immutable

// // 👇️ can change the contents of an array declared using const
// const arr = ['bobby', 'hadz'];

// arr[0] = 'xyz';

// console.log(arr); // 👉️ [ 'xyz', 'hadz' ]

// // ---------------------------------------------

// // 👇️ can change the contents of an object declared using const

// const obj = {name: 'bobby'};

// obj['name'] = 'alice';

// console.log(obj); // 👉️ { name: 'alice' }
