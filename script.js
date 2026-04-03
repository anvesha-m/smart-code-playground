(function(_0xabc1){
  function _0x12(a,b){
    return a+b;
  }
  let _0xscore=0;
  window['runCode']=function(){
    let _0xcode=editor['getValue']();
    let _0xout=document['getElementById']('output');
    try{
      let _0xres=eval(_0xcode);
      _0xout['innerText']=_0xres||'No output';
    }catch(e){
      _0xout['innerText']='Error';
    }
  }
})(window);
