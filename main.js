const greetings = require("./greeting.js");
const calculator = require("./basic-calculator.js");

// "Hello"
greetings.greetingEnglish();

// "Konichiwa"
greetings.greetingJapanese();

// "Holla"
greetings.greetingSpanish();

// "Halló"
greetings.greetingIcelandic();

// 100
calculator.addition(58, 42);

// -5
calculator.subtraction(20, 25);

// 60
calculator.multiplication(12, 5);

// 50
calculator.division(1000, 20);