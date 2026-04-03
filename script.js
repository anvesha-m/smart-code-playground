let editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  mode: "javascript",
  lineNumbers: true
});

let score = 0;
let streak = 0;

updateScore();

// ▶ RUN
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
    output.innerText = "❌ Error: " + e.message;
  }

  console.log = originalLog;
}

// 🧠 ANALYZE
function analyzeCode() {
  let code = editor.getValue();

  let analysis = "";
  let suggestions = "";

  if (code.includes("for")) analysis += "Uses a loop.\n";
  if (code.includes("if")) analysis += "Uses condition.\n";
  if (code.includes("function")) analysis += "Defines function.\n";
  if (code.includes("console.log")) analysis += "Prints output.\n";

  if (code.includes("==")) suggestions += "Use === instead of ==.\n";
  if (code.includes("var")) suggestions += "Use let/const.\n";

  if (!analysis) analysis = "Basic execution.";
  if (!suggestions) suggestions = "Looks good 👍";

  document.getElementById("analysis").innerText = analysis;
  document.getElementById("suggestions").innerText = suggestions;

  generateQuiz(code);
}

// 🎯 CHALLENGE SYSTEM
function loadChallenge() {
  let challenges = [
    {
      text: "Print numbers 1 to 5",
      code: "for(let i=1;i<=5;i++){console.log(i)}"
    },
    {
      text: "Print sum of 2 + 3",
      code: "console.log(2+3)"
    }
  ];

  let random = challenges[Math.floor(Math.random()*challenges.length)];

  document.getElementById("challenge").innerText = random.text;
  editor.setValue(random.code);
}

// 🎯 QUIZ
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
        alert("❌ Wrong! Correct: " + correct);
      }
      updateScore();
    };

    quizDiv.appendChild(btn);
  });
}

// 📊 SCORE
function updateScore() {
  document.getElementById("score").innerText =
    "Score: " + score + " | 🔥 Streak: " + streak;
}

// COPY
function copyCode() {
  navigator.clipboard.writeText(editor.getValue());
}

// DOWNLOAD
function downloadCode() {
  let blob = new Blob([editor.getValue()], {type:"text/plain"});
  let a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "code.js";
  a.click();
}
