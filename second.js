// const myName = "Alice";
// const myAge = 25;

// console.log("Hello from Node!");
// console.log("My name is:", myName);
// console.log("My age is:", myAge);

// const students=["kali","mali","sali"];
// const status = students.forEach((student) => console.log(student));
function greet(name="Guest") {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Hello, Alice!
greet("Bob");   // Hello, Bob!
greet();        // Hello, Guest!
// Multiple parameters
function add(a, b) {
  console.log(a + b);
}
add(3, 7); // 10