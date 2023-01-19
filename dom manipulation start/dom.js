//console.dir(document);
//console.log(document.lastChild);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);

//GETELEMENTBYID
//console.log(document.getElementById("header-title"));
var headerTitle=document.getElementById("header-title");
//console.log(headerTitle);
//headerTitle.textContent="Hello";
//headerTitle.innerText="Goodbye";
//headerTitle.innerHTML="<h3>Hii</h3>"
var header=document.getElementById("main-header")
header.style.border="solid 3px #000";
var title1=document.getElementsByClassName("title");
console.log(title1);
title1[0].style.fontWeight="bold";
title1[0].style.color="green";
