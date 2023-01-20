//Creating the edit button next to delete button

// to grab the element
let form = document.getElementById('addForm')
let itemList = document.getElementById('items')

//Form submit event
form.addEventListener('submit', addItem)

//Delete item using event listner
itemList.addEventListener('click', removeItem);

//Add item
function addItem(e){
    e.preventDefault()

    //to check 
   // console.log(1);

   //get Input value
   let newItem = document.getElementById('item').value

   //create new li element
   let li = document.createElement('li')
   

    //Add class
    li.className = 'list-group-item';
    //console.log(li); //To check

    //add text node with input value
    li.appendChild(document.createTextNode(newItem))

    //creating the delete button element
    let deleteBtn = document.createElement('button');
    let editBtn = document.createElement('button');

    //Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    editBtn.className = 'btn btn-success btn-sm float-right edit';

    //Add or appendtext node
    deleteBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('edit'));
    
    //Append button on li
    li.appendChild(editBtn);
    itemList.appendChild(li);
    li.appendChild(deleteBtn);

    //Append li to list
    itemList.appendChild(li);
}
var list=document.getElementsByClassName('list-group-item');


for(var i=0; i<list.length;i++){
    var button=document.createElement("button");
    button.className='btn btn-success btn-sm float-right edit';
    button.appendChild(document.createTextNode('edit'));
    list[i].appendChild(button);
}
//Remove item
function removeItem(e){
    //console.log(1)//if you click the any item any where then it will count the click
    if(e.target.classList.contains('delete')){
        //console.log(1);//but this will only target the delete button
    if(confirm('Are you sure?')){
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
    }
}