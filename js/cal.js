var btn0 = document.getElementById('btn0');
var btn1 = document.getElementById('btn1');
var btnSum = document.getElementById('btnSum');
var btnSub = document.getElementById('btnSub');
var btnMul = document.getElementById('btnMul');
var btnDiv = document.getElementById('btnDiv');
var btnClr = document.getElementById('btnClr');
var btnEql = document.getElementById('btnEql');
var res = document.getElementById('res');
btn0.onclick = function(){
    res.innerHTML+=0;
};
btn1.onclick = function(){
    res.innerHTML+=1;
};
btn2.onclick = function(){
    res.innerHTML+=2;
};
btn3.onclick = function(){
    res.innerHTML+=3;
};
btn4.onclick = function(){
    res.innerHTML+=4;
};
btn5.onclick = function(){
    res.innerHTML+=5;
};
btn6.onclick = function(){
    res.innerHTML+=6;
};
btn7.onclick = function(){
    res.innerHTML+=7;
};
btn8.onclick = function(){
    res.innerHTML+=8;
};
btn9.onclick = function(){
    res.innerHTML+=9;
};

btnOpen.onclick = function(){
    res.innerHTML+='(';
};
btnClose.onclick = function(){
    res.innerHTML+=')';
};
btnDot.onclick = function(){
    res.innerHTML+='.';
};


btnSum.onclick = function(){
    res.innerHTML+='+';
};
btnSub.onclick = function(){
    res.innerHTML+='-';
};
btnMul.onclick = function(){
    res.innerHTML+='*';
};
btnDiv.onclick = function(){
    res.innerHTML+='/';
};
btnClr.onclick = function(){
    res.innerHTML='';
};
btnEql.onclick = function(){
    var expr = res.innerHTML;
    // eval in base 10 and convert to base 2
    res.innerHTML = eval(expr);
};