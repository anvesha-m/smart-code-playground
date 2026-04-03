let editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  mode: "javascript",
  lineNumbers: true
});

// RUN CODE
function runCode() {
  let code = editor.getValue();
  let output = document.getElementById("output");

  let logs = [];
  const originalLog = console.log;

  console.log = (...args) => logs.push(args.join(" "));

  try {
    eval(code);
    output.innerText = logs.join("\n") || "No output";
  } catch (e) {
    output.innerText = "❌ " + e.message;
  }

  console.log = originalLog;
}

// 💡 SMART HINT SYSTEM
function getHint() {
  let code = editor.getValue();
  let hint = "";

  if (code.includes("for")) hint += "You are using a loop.\n";
  if (code.includes("if")) hint += "Conditional logic detected.\n";
  if (code.includes("function")) hint += "Function detected.\n";

  if (code.includes("==")) hint += "Try using === instead.\n";
  if (code.includes("var")) hint += "Use let/const for modern JS.\n";

  if (!hint) hint = "Try adding loops or conditions.";

  document.getElementById("hints").innerText = hint;
}

// 🧠 EXPLAIN CODE (AI-LIKE)
function explainCode() {
  let code = editor.getValue();
  let explanation = "";

  if (/for|while/.test(code))
    explanation += "This code runs a loop to repeat actions.\n";

  if (/if|else/.test(code))
    explanation += "This code uses conditions to make decisions.\n";

  if (/console\.log/.test(code))
    explanation += "This prints output to console.\n";

  if (!explanation)
    explanation = "Basic JavaScript execution.";

  document.getElementById("explanation").innerText = explanation;
}

// 🎮 CHALLENGE
function loadChallenge() {
  let challenges = [
    "Print numbers from 1 to 10",
    "Find sum of first 5 numbers",
    "Print even numbers till 20"
  ];

  document.getElementById("challengeText").innerText =
    challenges[Math.floor(Math.random()*challenges.length)];
}

// COPY
function copyCode() {
  navigator.clipboard.writeText(editor.getValue());
}
