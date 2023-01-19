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
//var header=document.getElementById("main-header")
//header.style.border="solid 3px #000";

//GETELMENTSBYCLASSNAME

//var title1=document.getElementsByClassName("title");
//console.log(title1);
//title1[0].style.fontWeight="bold";
//title1[0].style.color="green";

//var list=document.getElementsByClassName("list-group-item")
//console.log(list);
//list[2].style.backgroundColor="green";
//for(var i=0;i<list.length;i++){
   // list[i].style.fontWeight="bold";
    //list[i].style.color="green";
//}
//task no 5: (li item 5 was added for this task in index.html)
//var newli=document.getElementsByClassName("list-group-newitem")
//newli[0].style.color="blue"

//GETELEMENTSBYTAGNAME
var liitems=document.getElementsByTagName("li")
console.log(liitems);
liitems[4].style.backgroundColor="green";
for(var i=0;i<liitems.length;i++){
    liitems[i].style.fontWeight="bold";
    liitems[4].style.color="yellow";
}

