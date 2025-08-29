// ==============================
// Part 1: Variables and Conditionals
// ==============================

let userAge = 18; // Variable declaration

// Conditional example
if (userAge >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// ==============================
// Part 2: Custom Functions
// ==============================

// Function 1: Check if user is old enough
function checkAge() {
  if (userAge >= 18) {
    document.getElementById("ageResult").textContent = "✅ You are an adult!";
  } else {
    document.getElementById("ageResult").textContent = "❌ You are a minor!";
  }
}

// Function 2: Simple greeting
function greetUser(name) {
  document.getElementById("greetMsg").textContent = "Hello, " + name + " 👋";
}

// ==============================
// Part 3: Loops
// ==============================

function showNumbers() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear previous list

  // For loop example
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number: " + i;
    list.appendChild(li);
  }

  // While loop example
  let j = 6;
  while (j <= 10) {
    let li = document.createElement("li");
    li.textContent = "Number: " + j;
    list.appendChild(li);
    j++;
  }
}

// ==============================
// Part 4: DOM Interactions
// ==============================

// 1. Add event listener for age check
document.getElementById("checkAgeBtn").addEventListener("click", checkAge);

// 2. Add event listener for greeting
document.getElementById("greetBtn").addEventListener("click", function() {
  greetUser("Student"); // calls function with parameter
});

// 3. Add event listener for loops
document.getElementById("loopBtn").addEventListener("click", showNumbers);

// 4. Change background color (extra DOM interaction)
document.getElementById("colorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "lightyellow" ? "#f4f4f4" : "lightyellow";
});
