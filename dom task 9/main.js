var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var description = document.getElementById('description').value;
  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(description));
  // Create del button element
  let editBtn = document.createElement('button');
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  editBtn.className = 'btn btn-success btn-sm float-right edit';
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  editBtn.appendChild(document.createTextNode('edit'));
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}
//adding edit button

var list=document.getElementsByClassName('list-group-item');


for(var i=0; i<list.length;i++){
    var button=document.createElement("button");
    button.className='btn btn-success btn-sm float-right edit';
    button.appendChild(document.createTextNode('edit'));
    list[i].appendChild(button);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');

  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    var description = item.childNodes[1].textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text)!=-1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}