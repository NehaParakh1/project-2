// click

const btn=document.querySelector(".btn")

btn.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector(".items").lastElementChild.innerHTML = '<h1>Hello</h1>';
  });

// mouseover
  const btn=document.querySelector(".btn")

btn.addEventListener('mouseover', e => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector(".items").lastElementChild.innerHTML = '<h1>Hello</h1>';
  });

//mouseout
  const btn=document.querySelector(".btn")

btn.addEventListener('mouseout', e => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector(".items").lastElementChild.innerHTML = '<h1>Hello</h1>';
  });


  // USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.log(nameInput.value); // taking the input value
  console.log(emailInput.value);//taking the email value
}
 //
function onSubmit(e) {
if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error'); //adding the style for the msg from css
    msg.innerHTML = 'Please enter all fields'; //if the input or the email field is empty display the msg
    setTimeout(() => msg.remove(), 3000); //the msg will be displayed only for 3000ms or 3s and then it disappears.
    else {
        // Create new list item with user
        const li = document.createElement('li');
    
        // Add text node with input values
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    
        // Add HTML
        // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;
    
        // Append to ul
        userList.appendChild(li);
    
        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
      }
    }
 