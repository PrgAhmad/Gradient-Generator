let genNum = () =>{
    let num = Math.round(Math.random()*15).toString(16);
    return num;
}
let num2 = genNum()+genNum()+genNum()+genNum()+genNum()+genNum();

let clr1 = document.querySelector(".clr1");
clr1.addEventListener("click",()=>{
    clr1.innerText = `#${genNum()+genNum()+genNum()+genNum()+genNum()+genNum()}`;
    clr1.style.backgroundColor=clr1.innerText;
    fun1();
    msg.style.display="none";
});

let clr2 = document.querySelector(".clr2");
clr2.addEventListener("click",()=>{
    clr2.innerText = `#${genNum()+genNum()+genNum()+genNum()+genNum()+genNum()}`;
    clr2.style.backgroundColor=clr2.innerText;
    fun1();
    msg.style.display="none";
});

let code = document.querySelector(".code p");
let body = document.querySelector("body");

let fun1 = ()=>{
    body.style.background=`linear-gradient(to right,${clr1.innerText},${clr2.innerText})`;
    code.innerText=`background: linear-gradient( to right, ${clr1.innerText}, ${clr2.innerText} );`
}
let msg = document.querySelector(".msg");

let copy = document.querySelector(".code");
copy.addEventListener("click",()=>{
navigator.clipboard.writeText(code.innerText);
msg.style.display="flex";
});

let dir_fun = (dir)=>{
    body.style.background=`linear-gradient(to ${dir},${clr1.innerText},${clr2.innerText})`;
    code.innerText=`background: linear-gradient( to ${dir}, ${clr1.innerText}, ${clr2.innerText} );` 
}

let dir = document.querySelectorAll(".dir");
dir[0].addEventListener("click",()=>{
    dir_fun("top");
    msg.style.display="none";
});
dir[1].addEventListener("click",()=>{
    dir_fun("right");
    msg.style.display="none";
});
dir[2].addEventListener("click",()=>{
    dir_fun("bottom");
    msg.style.display="none";
});
dir[3].addEventListener("click",()=>{
    dir_fun("left");
    msg.style.display="none";
});