function Expand() {
    // body...
    var extras = document.getElementsByClassName('extra');
    if(extras[0].style.display=="block"){
        for(let i=0;i<extras.length;i++)
            extras[i].style.display = "none";
        document.getElementById("res").style.width = "285px";
        document.getElementById("expand-sign").style.display = "block";
    }
    else{
        for(let i=0;i<extras.length;i++)
            extras[i].style.display = "block";
        document.getElementById("res").style.width = "355px";
        document.getElementById("expand-sign").style.display = "none";
    }
}
function changeExpr(va){
    var val = va.innerHTML;
    document.getElementById("res").innerHTML += String(val);
}
function cutExpr(){
    document.getElementById("res").innerHTML = document.getElementById("res").innerHTML.slice(0,-1)
}
function evalExpr(){
    var res = document.getElementById("res").innerHTML;
    document.getElementById("res").innerHTML = eval(res);
}
function clrExpr(){
    document.getElementById("res").innerHTML = '';
}
function sqrtExpr(){
    document.getElementById("res").innerHTML += '√';
}