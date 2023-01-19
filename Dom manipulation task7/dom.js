//TRAVERSING THE DOM
 //PARENT ELEMENT
 var itemlist=document.querySelector(" #items")
 console.log(itemlist.parentElement);
 itemlist.style.backgroundColor="green";
 console.log(itemlist.parentElement.parentElement);

 //CHILDNODES
 //consolelog(itemlist.childNodes);
 console.log(itemlist.children);
 console.log(itemlist.children[1]);
 itemlist.children[1].style.backgroundColor ="yellow";

 //FIRSTCHILD
 console.log(itemlist.firstChild);

 //FIRSTELEMENTCHILD
 console.log(itemlist.firstElementChild);
 itemlist.firstElementChild.textContent = "Hello 1";

 //LAST CHILD
 console.log(itemlist.lastChild);

 //LASTELEMENTCHILD
 console.log(itemlist.lasttElementChild);
 itemlist.lastElementChild.textContent = "Hello 4";

 //NEXTSIBLING
 console.log(itemlist.nextSibling);

 //NEXTELEMENTSIBLING
 console.log(itemlist.nextElementSibling);

 //PREVIOUSSIBLING
 console.log(itemlist.previousSibling);

 //PREVIOUSELEMENTSIBLING
 console.log(itemlist.previousElementSibling);
 itemlist.previousElementSibling.style.color ="green";

 //CREATEELEMENT

 //CREATE A DIV
 var newdiv=document.createElement("div");
//add class
 newdiv.className='hello'
//add id
newdiv.id='hello1'
//add attribute
newdiv.setAttribute('title', 'Hello Div');
//create text node
var newdivText=document.createTextNode('Hello world');
//add text to div
newdiv.appendChild(newdivText);

var container=document.querySelector('header .container');
var h1= document.querySelector('header h1');

console.log(newdiv);

newdiv.style.fontsize='35px'

container.insertBefore(newdiv,h1);

//adding hello before item lister

var newdiv=document.createElement("div");
//add class
 newdiv.className='hello'
//add id
newdiv.id='hello1'
//add attribute
newdiv.setAttribute('title', 'Hello Div');
//create text node
var newdivText=document.createTextNode('Hello');
//add text to div
newdiv.appendChild(newdivText);

var container=document.querySelector('header .container');
var h1= document.querySelector('header h1');

console.log(newdiv);

newdiv.style.fontsize='35px'

container.insertBefore(newdiv,h1);
// adding hello before item 1
var newli=document.createElement("li")
var newliText=document.createTextNode("Hello")
newli.appendChild(newliText);
var list=document.getElementById("items");
list.insertBefore(newli,list.children[0]);
