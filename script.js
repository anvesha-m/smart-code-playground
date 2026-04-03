let editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  mode: "javascript",
  lineNumbers: true
});

let score = 0;
let streak = 0;

updateScore();

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

function analyzeCode() {
  let code = editor.getValue();

  let analysis = [];
  let suggestions = [];

  if (/for|while/.test(code)) analysis.push("Loop detected.");
  if (/if|else/.test(code)) analysis.push("Conditional logic.");
  if (/function/.test(code)) analysis.push("Function used.");
  if (/console\.log/.test(code)) analysis.push("Outputs data.");

  if (code.includes("==")) suggestions.push("Use === instead of ==.");
  if (code.includes("var")) suggestions.push("Use let/const instead of var.");

  document.getElementById("analysis").innerText =
    analysis.join("\n") || "Basic execution.";

  document.getElementById("suggestions").innerText =
    suggestions.join("\n") || "Code looks clean 👍";

  generateQuiz(code);
}

function loadChallenge() {
  let challenges = [
    "Print numbers 1 to 5",
    "Find sum of 1 to 10",
    "Print even numbers till 10"
  ];

  document.getElementById("challenge").innerText =
    challenges[Math.floor(Math.random()*challenges.length)];
}

function generateQuiz(code) {
  let correct;

  try {
    let logs = [];
    console.log = (...args) => logs.push(args.join(" "));
    eval(code);
    correct = logs.join("") || "No output";
  } catch {
    correct = "error";
  }

  let options = [correct, "undefined", "error", Math.floor(Math.random()*10)];
  options = [...new Set(options)];

  let quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = "<p>What is output?</p>";

  options.forEach(opt => {
    let btn = document.createElement("button");
    btn.innerText = opt;

    btn.onclick = () => {
      if (opt == correct) {
        score++;
        streak++;
        alert("✅ Correct!");
      } else {
        streak = 0;
        alert("❌ Wrong!");
      }
      updateScore();
    };

    quizDiv.appendChild(btn);
  });
}

function updateScore() {
  document.getElementById("score").innerText =
    "Score: " + score + " | 🔥 Streak: " + streak;
}

function copyCode() {
  navigator.clipboard.writeText(editor.getValue());
}
