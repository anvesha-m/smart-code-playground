(function(){
let e=CodeMirror.fromTextArea(document.getElementById("code"),{mode:"javascript",lineNumbers:!0}),t=0,n=0;
function o(){document.getElementById("score").innerText="Score: "+t+" | 🔥 Streak: "+n}
window.runCode=function(){
let o=e.getValue(),c=document.getElementById("output"),l=[],a=console.log;
console.log=(...e)=>l.push(e.join(" "));
try{eval(o),c.innerText=l.join("\n")||"No output"}catch(e){c.innerText="❌ "+e.message}
console.log=a};
window.analyzeCode=function(){
let o=e.getValue(),c=[],l=[];
/for|while/.test(o)&&c.push("Loop detected."),
/if|else/.test(o)&&c.push("Conditional logic."),
/function/.test(o)&&c.push("Function used."),
/console\.log/.test(o)&&c.push("Outputs data."),
o.includes("==")&&l.push("Use === instead of ==."),
o.includes("var")&&l.push("Use let/const instead of var."),
document.getElementById("analysis").innerText=c.join("\n")||"Basic execution.",
document.getElementById("suggestions").innerText=l.join("\n")||"Code looks clean 👍",
function(o){
let c;
try{
let l=[];
console.log=(...e)=>l.push(e.join(" "));
eval(o),c=l.join("")||"No output"
}catch{c="error"}
let l=[c,"undefined","error",Math.floor(10*Math.random())];
l=[...new Set(l)];
let a=document.getElementById("quiz");
a.innerHTML="<p>What is output?</p>",
l.forEach(o=>{
let l=document.createElement("button");
l.innerText=o,
l.onclick=()=>{
o==c?(t++,n++,alert("✅ Correct!")):(n=0,alert("❌ Wrong!")),function(){document.getElementById("score").innerText="Score: "+t+" | 🔥 Streak: "+n}()},
a.appendChild(l)
})
}(o)};
window.loadChallenge=function(){
let e=["Print numbers 1 to 5","Find sum of 1 to 10","Print even numbers till 10"];
document.getElementById("challenge").innerText=e[Math.floor(Math.random()*e.length)]
};
window.copyCode=function(){navigator.clipboard.writeText(e.getValue())};
o()
})();
