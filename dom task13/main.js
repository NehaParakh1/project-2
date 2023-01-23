function saveToLocalStorage(event){
    event.preventDefault();
    let name=event.target.name.value;
    let email=event.target.email.value;
    let phonenumber=event.target.phonenumber.value;
   const obj={
    name:name,
    email:email,
phonenumber:phonenumber
   }
   localStorage.setItem(obj.email,JSON.stringify(obj));
   showUserOnScreen(obj)
}
function showUserOnScreen(obj){
    const parentItem=document.getElementById("users")
    const childItem=document.createElement("li")
    childItem.textContent= obj.name + ' - '+ obj.email + ' - ' + obj.phonenumber

    const deleteButton=document.createElement('input')
    deleteButton.type= "button"
    deleteButton.value= 'delete'
    deleteButton.onclick= ()=>{
        localStorage.removeItem(obj.email)
        parentItem.removeChild(childItem)

    }
    childItem.appendChild(deleteButton)
    parentItem.appendChild(childItem)
}

//function showUserOnScreen(obj){
    //const parentElem=document.getElementById("users")
    //parentElem.innerHTML=parentElem.HTML +`<li>$(obj.name) - $(obj.email) - $(obj.phonenumber)</li>`