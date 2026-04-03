(function(){
let _0x1a=["getElementById","code","mode","javascript","lineNumbers","fromTextArea","CodeMirror","value","getValue","output","innerText","join","log","push","eval","Error","❌ ","test","analysis","suggestions","includes","length","Basic execution.","Code looks clean 👍","quiz","button","createElement","innerHTML","appendChild","onclick","Correct!","Wrong!","score","streak","Score: "," | 🔥 Streak: ","navigator","clipboard","writeText"];
let editor=window[_0x1a[6]][_0x1a[5]](document[_0x1a[0]](_0x1a[1]),{mode:_0x1a[3],lineNumbers:!![]});
let score=0,streak=0;
function updateScore(){document[_0x1a[0]](_0x1a[34])[_0x1a[10]]=_0x1a[36]+score+_0x1a[37]+streak}
window.runCode=function(){
let _0xcode=editor[_0x1a[8]]();
let _0xout=document[_0x1a[0]](_0x1a[9]);
let _0xlogs=[];
let _0xorig=console[_0x1a[12]];
console[_0x1a[12]]=function(..._0xa){_0xlogs[_0x1a[13]](_0xa[_0x1a[11]](" "))};
try{eval(_0xcode);_0xout[_0x1a[10]]=_0xlogs[_0x1a[11]]("\n")||"No output"}catch(e){_0xout[_0x1a[10]]=_0x1a[16]+e[_0x1a[15]]}
console[_0x1a[12]]=_0xorig
};
window.analyzeCode=function(){
let _0xcode=editor[_0x1a[8]]();
let _0xa=[],_0xb=[];
if(/for|while/[_0x1a[17]](_0xcode))_0xa[_0x1a[13]]("Loop detected → repeating operations.");
if(/if|else/[_0x1a[17]](_0xcode))_0xa[_0x1a[13]]("Conditional logic present.");
if(/function/[_0x1a[17]](_0xcode))_0xa[_0x1a[13]]("Function used → reusable logic.");
if(/console\.log/[_0x1a[17]](_0xcode))_0xa[_0x1a[13]]("Outputs data to console.");
if(_0xcode[_0x1a[20]]("=="))_0xb[_0x1a[13]]("Use === for strict comparison.");
if(_0xcode[_0x1a[20]]("var"))_0xb[_0x1a[13]]("Prefer let/const over var.");
if(_0xcode[_0x1a[21]]<20)_0xb[_0x1a[13]]("Try writing a more complex example.");
document[_0x1a[0]](_0x1a[18])[_0x1a[10]]=_0xa[_0x1a[11]]("\n")||_0x1a[22];
document[_0x1a[0]](_0x1a[19])[_0x1a[10]]=_0xb[_0x1a[11]]("\n")||_0x1a[23];
generateQuiz(_0xcode)
};
window.loadChallenge=function(){
let _0xc=["Print numbers 1 to 5","Find sum of 1 to 10","Print even numbers till 10"];
document[_0x1a[0]]("challenge")[_0x1a[10]]=_0xc[Math.floor(Math.random()*_0xc[_0x1a[21]])]
};
function generateQuiz(_0xcode){
let correct;
try{
let _0xlogs=[];
console[_0x1a[12]]=(..._0xa)=>_0xlogs[_0x1a[13]](_0xa[_0x1a[11]](" "));
eval(_0xcode);
correct=_0xlogs[_0x1a[11]]("")||"No output"
}catch{correct="error"}
let _0xopts=[correct,"undefined","error",Math.floor(Math.random()*10)];
_0xopts=[...new Set(_0xopts)];
let _0xd=document[_0x1a[0]](_0x1a[24]);
_0xd[_0x1a[27]]="";
_0xopts.forEach(opt=>{
let _0xbtn=document[_0x1a[26]](_0x1a[25]);
_0xbtn[_0x1a[10]]=opt;
_0xbtn[_0x1a[29]]=()=>{
if(opt==correct){score++;streak++;alert(_0x1a[30])}
else{streak=0;alert(_0x1a[31])}
updateScore()
};
_0xd[_0x1a[28]](_0xbtn)
})
}
window.copyCode=function(){
navigator[_0x1a[38]][_0x1a[39]](editor[_0x1a[8]]())
};
updateScore()
})();
