// 50 JavaScript Assessment Questions
const assessmentQuestions = [
  // VARIABLES & DATA TYPES (Questions 1-10)
  {
    id: 1,
    question: "What will be logged to the console?",
    code: "let x = 5;\nlet y = x;\ny = 10;\nconsole.log(x);",
    options: ["A) 5", "B) 10", "C) undefined", "D) Error"],
    correct: "a",
    explanation: "Primitives (numbers, strings, booleans) are copied by value. Changing y doesn't affect x."
  },
  {
    id: 2,
    question: "What is the data type of null?",
    code: "console.log(typeof null);",
    options: ["A) 'null'", "B) 'object'", "C) 'undefined'", "D) 'number'"],
    correct: "b",
    explanation: "typeof null returns 'object' - this is a known JavaScript quirk/bug that has been kept for compatibility."
  },
  {
    id: 3,
    question: "What will be logged?",
    code: "const name = 'Alice';\nconst greeting = `Hello, ${name}!`;\nconsole.log(greeting);",
    options: ["A) Hello, ${name}!", "B) Hello, Alice!", "C) Hello, name!", "D) Error"],
    correct: "b",
    explanation: "Template literals (backticks) allow string interpolation using ${variable}."
  },
  {
    id: 4,
    question: "Which keyword should you use for a value that won't change?",
    code: "// Which is best for PI?\n___ PI = 3.14159;",
    options: ["A) var", "B) let", "C) const", "D) static"],
    correct: "c",
    explanation: "Use const for values that won't be reassigned. It prevents accidental changes."
  },
  {
    id: 5,
    question: "What will be logged?",
    code: "let score;\nconsole.log(score);",
    options: ["A) null", "B) undefined", "C) 0", "D) Error"],
    correct: "b",
    explanation: "Variables declared but not assigned a value are undefined."
  },
  {
    id: 6,
    question: "What will be logged?",
    code: "console.log('5' + 3);",
    options: ["A) 8", "B) '53'", "C) 53", "D) Error"],
    correct: "b",
    explanation: "When using + with a string, JavaScript converts the number to a string and concatenates."
  },
  {
    id: 7,
    question: "What will be logged?",
    code: "console.log(10 / 0);",
    options: ["A) Error", "B) undefined", "C) Infinity", "D) NaN"],
    correct: "c",
    explanation: "Division by zero in JavaScript returns Infinity, not an error."
  },
  {
    id: 8,
    question: "What will be logged?",
    code: "console.log(typeof [1, 2, 3]);",
    options: ["A) 'array'", "B) 'object'", "C) 'list'", "D) 'Array'"],
    correct: "b",
    explanation: "Arrays are objects in JavaScript. typeof returns 'object' for arrays."
  },
  {
    id: 9,
    question: "What will be logged?",
    code: "const isTrue = true;\nconsole.log(!isTrue);",
    options: ["A) true", "B) false", "C) undefined", "D) Error"],
    correct: "b",
    explanation: "The ! operator (NOT) flips the boolean value. !true becomes false."
  },
  {
    id: 10,
    question: "What will be logged?",
    code: "console.log('Hello'.length);",
    options: ["A) 4", "B) 5", "C) 6", "D) undefined"],
    correct: "b",
    explanation: "The length property returns the number of characters in a string. 'Hello' has 5 characters."
  },

  // OPERATORS (Questions 11-15)
  {
    id: 11,
    question: "What will be logged?",
    code: "console.log(10 % 3);",
    options: ["A) 3", "B) 1", "C) 3.33", "D) 0"],
    correct: "b",
    explanation: "The modulo operator (%) returns the remainder. 10 divided by 3 is 3 with remainder 1."
  },
  {
    id: 12,
    question: "What will be logged?",
    code: "console.log(5 === '5');",
    options: ["A) true", "B) false", "C) undefined", "D) Error"],
    correct: "b",
    explanation: "=== checks both value AND type. 5 (number) is not strictly equal to '5' (string)."
  },
  {
    id: 13,
    question: "What will be logged?",
    code: "let x = 10;\nx += 5;\nconsole.log(x);",
    options: ["A) 10", "B) 15", "C) 105", "D) Error"],
    correct: "b",
    explanation: "x += 5 is shorthand for x = x + 5. So 10 + 5 = 15."
  },
  {
    id: 14,
    question: "What will be logged?",
    code: "console.log(true && false);",
    options: ["A) true", "B) false", "C) undefined", "D) Error"],
    correct: "b",
    explanation: "The && (AND) operator returns true only if BOTH sides are true. true && false = false."
  },
  {
    id: 15,
    question: "What will be logged?",
    code: "console.log(false || true);",
    options: ["A) true", "B) false", "C) undefined", "D) Error"],
    correct: "a",
    explanation: "The || (OR) operator returns true if AT LEAST ONE side is true. false || true = true."
  },

  // CONDITIONALS (Questions 16-20)
  {
    id: 16,
    question: "What will be logged?",
    code: "const age = 17;\nif (age >= 18) {\n  console.log('Adult');\n} else {\n  console.log('Minor');\n}",
    options: ["A) Adult", "B) Minor", "C) undefined", "D) Error"],
    correct: "b",
    explanation: "17 is not >= 18, so the else block runs and logs 'Minor'."
  },
  {
    id: 17,
    question: "What will be logged?",
    code: "const score = 85;\nconst grade = score >= 90 ? 'A' : 'B';\nconsole.log(grade);",
    options: ["A) A", "B) B", "C) 85", "D) undefined"],
    correct: "b",
    explanation: "Ternary operator: condition ? valueIfTrue : valueIfFalse. 85 >= 90 is false, so 'B'."
  },
  {
    id: 18,
    question: "What will be logged?",
    code: "const day = 3;\nswitch(day) {\n  case 1: console.log('Mon'); break;\n  case 2: console.log('Tue'); break;\n  case 3: console.log('Wed'); break;\n}",
    options: ["A) Mon", "B) Tue", "C) Wed", "D) undefined"],
    correct: "c",
    explanation: "switch matches day (3) with case 3, so 'Wed' is logged."
  },
  {
    id: 19,
    question: "What will be logged?",
    code: "const x = 10;\nif (x > 5 && x < 15) {\n  console.log('Yes');\n} else {\n  console.log('No');\n}",
    options: ["A) Yes", "B) No", "C) undefined", "D) Error"],
    correct: "a",
    explanation: "10 > 5 is true AND 10 < 15 is true, so both conditions are met and 'Yes' is logged."
  },
  {
    id: 20,
    question: "What will be logged?",
    code: "const value = 0;\nif (value) {\n  console.log('Truthy');\n} else {\n  console.log('Falsy');\n}",
    options: ["A) Truthy", "B) Falsy", "C) 0", "D) Error"],
    correct: "b",
    explanation: "0 is a falsy value in JavaScript. Other falsy values: false, '', null, undefined, NaN."
  },

  // LOOPS (Questions 21-25)
  {
    id: 21,
    question: "What will be logged?",
    code: "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}",
    options: ["A) 0 1 2", "B) 1 2 3", "C) 0 1 2 3", "D) Error"],
    correct: "a",
    explanation: "Loop starts at 0, runs while i < 3, so it logs 0, 1, 2."
  },
  {
    id: 22,
    question: "What will be logged?",
    code: "let count = 0;\nfor (let i = 0; i < 5; i++) {\n  if (i === 2) continue;\n  count++;\n}\nconsole.log(count);",
    options: ["A) 4", "B) 5", "C) 2", "D) 3"],
    correct: "a",
    explanation: "Loop runs 5 times but skips count++ when i=2, so count is incremented 4 times."
  },
  {
    id: 23,
    question: "What will be logged?",
    code: "let i = 0;\nwhile (i < 3) {\n  console.log(i);\n  i++;\n}",
    options: ["A) 0 1 2", "B) 1 2 3", "C) 0 1 2 3", "D) Infinite loop"],
    correct: "a",
    explanation: "while loop runs while condition is true. Logs 0, 1, 2, then stops when i becomes 3."
  },
  {
    id: 24,
    question: "What will be logged?",
    code: "for (let i = 0; i < 10; i++) {\n  if (i === 3) break;\n  console.log(i);\n}",
    options: ["A) 0 1 2", "B) 0 1 2 3", "C) 0 1 2 3 4", "D) Error"],
    correct: "a",
    explanation: "break exits the loop immediately. When i=3, break runs before console.log, so only 0,1,2 are logged."
  },
  {
    id: 25,
    question: "What will be logged?",
    code: "const arr = ['a', 'b', 'c'];\nfor (const item of arr) {\n  console.log(item);\n}",
    options: ["A) a b c", "B) 0 1 2", "C) ['a','b','c']", "D) Error"],
    correct: "a",
    explanation: "for...of loops through array values. It logs each item: 'a', 'b', 'c'."
  },

  // FUNCTIONS (Questions 26-30)
  {
    id: 26,
    question: "What will be logged?",
    code: "function greet(name = 'Guest') {\n  return 'Hello, ' + name;\n}\nconsole.log(greet());",
    options: ["A) Hello, Guest", "B) Hello, undefined", "C) Hello,", "D) Error"],
    correct: "a",
    explanation: "When no argument is passed, the default parameter value 'Guest' is used."
  },
  {
    id: 27,
    question: "What will be logged?",
    code: "function add(a, b) {\n  return a + b;\n}\nconsole.log(add(3, 7));",
    options: ["A) 10", "B) 37", "C) '37'", "D) undefined"],
    correct: "a",
    explanation: "The function returns 3 + 7 = 10."
  },
  {
    id: 28,
    question: "What will be logged?",
    code: "const double = n => n * 2;\nconsole.log(double(5));",
    options: ["A) 5", "B) 10", "C) 25", "D) Error"],
    correct: "b",
    explanation: "Arrow function doubles the input. 5 * 2 = 10."
  },
  {
    id: 29,
    question: "What will be logged?",
    code: "function test() {\n  return 'Hello';\n  console.log('World');\n}\nconsole.log(test());",
    options: ["A) Hello World", "B) Hello", "C) World", "D) undefined"],
    correct: "b",
    explanation: "return exits the function immediately. Code after return never runs."
  },
  {
    id: 30,
    question: "What will be logged?",
    code: "function noReturn() {\n  let x = 10;\n}\nconsole.log(noReturn());",
    options: ["A) 10", "B) undefined", "C) null", "D) Error"],
    correct: "b",
    explanation: "Functions without a return statement return undefined by default."
  },

  // ARRAYS (Questions 31-40)
  {
    id: 31,
    question: "What will be logged?",
    code: "const arr = [1, 2, 3];\nconst newArr = arr;\nnewArr.push(4);\nconsole.log(arr.length);",
    options: ["A) 3", "B) 4", "C) undefined", "D) Error"],
    correct: "b",
    explanation: "Arrays are reference types. newArr and arr point to the same array, so both have length 4."
  },
  {
    id: 32,
    question: "What will be logged?",
    code: "const fruits = ['apple', 'banana'];\nfruits.push('cherry');\nconsole.log(fruits.length);",
    options: ["A) 2", "B) 3", "C) 4", "D) Error"],
    correct: "b",
    explanation: "push adds an item to the end. Array now has 3 items."
  },
  {
    id: 33,
    question: "What will be logged?",
    code: "const numbers = [1, 2, 3, 4, 5];\nconst result = numbers.filter(n => n > 3);\nconsole.log(result.length);",
    options: ["A) 2", "B) 3", "C) 5", "D) undefined"],
    correct: "a",
    explanation: "filter returns [4, 5] (numbers > 3), which has length 2."
  },
  {
    id: 34,
    question: "What will be logged?",
    code: "const numbers = [1, 2, 3];\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled[0]);",
    options: ["A) 1", "B) 2", "C) 3", "D) undefined"],
    correct: "b",
    explanation: "map transforms each element. First element 1 * 2 = 2."
  },
  {
    id: 35,
    question: "What will be logged?",
    code: "const arr = ['a', 'b', 'c'];\nconsole.log(arr[arr.length - 1]);",
    options: ["A) a", "B) b", "C) c", "D) undefined"],
    correct: "c",
    explanation: "arr.length is 3, so arr[3-1] = arr[2] = 'c' (the last element)."
  },
  {
    id: 36,
    question: "What will be logged?",
    code: "const arr = [1, 2, 3];\narr.pop();\nconsole.log(arr.length);",
    options: ["A) 1", "B) 2", "C) 3", "D) undefined"],
    correct: "b",
    explanation: "pop removes the last element. Array now has 2 items."
  },
  {
    id: 37,
    question: "What will be logged?",
    code: "const fruits = ['apple', 'banana', 'cherry'];\nconsole.log(fruits.includes('banana'));",
    options: ["A) true", "B) false", "C) 1", "D) undefined"],
    correct: "a",
    explanation: "includes checks if an array contains a value. 'banana' is in the array, so true."
  },
  {
    id: 38,
    question: "What will be logged?",
    code: "const arr = [1, 2, 3];\nconst found = arr.find(n => n > 2);\nconsole.log(found);",
    options: ["A) 1", "B) 2", "C) 3", "D) undefined"],
    correct: "c",
    explanation: "find returns the FIRST element that matches. 3 is the first number > 2."
  },
  {
    id: 39,
    question: "What will be logged?",
    code: "const words = ['hello', 'world'];\nconsole.log(words.join(' '));",
    options: ["A) hello world", "B) helloworld", "C) ['hello','world']", "D) Error"],
    correct: "a",
    explanation: "join combines array elements into a string with the given separator."
  },
  {
    id: 40,
    question: "What will be logged?",
    code: "const arr = [];\nconsole.log(arr.length);",
    options: ["A) 0", "B) undefined", "C) null", "D) Error"],
    correct: "a",
    explanation: "Empty arrays have length 0."
  },

  // OBJECTS (Questions 41-45)
  {
    id: 41,
    question: "What will be logged?",
    code: "const person = { name: 'Alice', age: 25 };\nconst copy = { ...person };\ncopy.age = 30;\nconsole.log(person.age);",
    options: ["A) 25", "B) 30", "C) undefined", "D) Error"],
    correct: "a",
    explanation: "Spread operator creates a shallow copy. Changing copy doesn't affect person."
  },
  {
    id: 42,
    question: "What will be logged?",
    code: "const car = { brand: 'Toyota', year: 2020 };\nconsole.log(car.brand);",
    options: ["A) Toyota", "B) 'Toyota'", "C) undefined", "D) Error"],
    correct: "a",
    explanation: "Dot notation accesses object properties. car.brand returns 'Toyota'."
  },
  {
    id: 43,
    question: "What will be logged?",
    code: "const obj = { x: 10 };\nobj.y = 20;\nconsole.log(obj.y);",
    options: ["A) 10", "B) 20", "C) undefined", "D) Error"],
    correct: "b",
    explanation: "You can add new properties to objects. obj.y is now 20."
  },
  {
    id: 44,
    question: "What will be logged?",
    code: "const person = { name: 'Bob' };\nconsole.log(person['name']);",
    options: ["A) Bob", "B) name", "C) undefined", "D) Error"],
    correct: "a",
    explanation: "Bracket notation also accesses properties. person['name'] returns 'Bob'."
  },
  {
    id: 45,
    question: "What will be logged?",
    code: "const obj = { a: 1, b: 2, c: 3 };\nconsole.log(Object.keys(obj).length);",
    options: ["A) 1", "B) 2", "C) 3", "D) 6"],
    correct: "c",
    explanation: "Object.keys returns an array of property names. This object has 3 keys."
  },

  // MIXED CONCEPTS (Questions 46-50)
  {
    id: 46,
    question: "What will be logged?",
    code: "const arr = [1, 2, 3];\nconst [first, second] = arr;\nconsole.log(second);",
    options: ["A) 1", "B) 2", "C) 3", "D) undefined"],
    correct: "b",
    explanation: "Array destructuring assigns first=1, second=2. So second is 2."
  },
  {
    id: 47,
    question: "What will be logged?",
    code: "const str = 'hello';\nconsole.log(str.toUpperCase());",
    options: ["A) hello", "B) HELLO", "C) Hello", "D) Error"],
    correct: "b",
    explanation: "toUpperCase() converts all characters to uppercase."
  },
  {
    id: 48,
    question: "What will be logged?",
    code: "console.log(Math.max(5, 10, 3));",
    options: ["A) 3", "B) 5", "C) 10", "D) 18"],
    correct: "c",
    explanation: "Math.max returns the largest number from the arguments."
  },
  {
    id: 49,
    question: "What will be logged?",
    code: "const result = [1, 2, 3].map(n => n * 2).filter(n => n > 3);\nconsole.log(result.length);",
    options: ["A) 1", "B) 2", "C) 3", "D) 0"],
    correct: "b",
    explanation: "map gives [2,4,6], filter keeps [4,6] (numbers > 3), length is 2."
  },
  {
    id: 50,
    question: "What will be logged?",
    code: "const getValue = () => {\n  return { value: 42 };\n};\nconsole.log(getValue().value);",
    options: ["A) 42", "B) undefined", "C) { value: 42 }", "D) Error"],
    correct: "a",
    explanation: "Function returns an object with value: 42. We access .value which is 42."
  }
];
