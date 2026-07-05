//-----------------Input 1------------------------------

let todoList1 = JSON.parse(localStorage.getItem('todo-list1')) || [];

function itemAdd1(){
  const inputValue = document.querySelector('.input1').value;

  todoList1.push(inputValue);

  localStorage.setItem('todo-list1',JSON.stringify(todoList1));

  // console.log(todoList1);

  document.querySelector('.input1').value = '';
}

function eraseList(){
  localStorage.removeItem('todo-list1');
  todoList1 = [];
  // console.log(todoList1);
}

//----------------Input 2-------------------------------

let todoList2 = JSON.parse(localStorage.getItem('todo-list2')) ||
[];

function itemAdd2 (){
  const  inputValue = document.querySelector('.input2').value;
  const inputDate = document.querySelector('.dateInput').value;
  const obj = {
    name : inputValue,
    date : inputDate
  };
  todoList2.push(obj);

  // add in the storage
  localStorage.setItem('todo-list2',JSON.stringify(todoList2));

  // console.log(todoList2);

  document.querySelector('.input2').value = '';

  renderHistory();
}

function renderHistory() {
  let show = '';
  for(let i = 0;i < todoList2.length;i++){

    show += `
    <div class="js-date">${todoList2[i].date}</div>  
    <div class="js-todo">${todoList2[i].name}</div>
    <button class ="removeButton">Remove</button>
    `;
  }
  document.querySelector('.show').innerHTML = show;

  const removeButton = document.querySelectorAll('.removeButton');
  // it will give the list of all the elments with class 'removeButton'

  removeButton.forEach((value,index) => {
    value.addEventListener('click', () => {
      todoList2.splice(index,1);
      renderHistory();
    });
  });

}

function eraseList2(){
  localStorage.removeItem('todo-list2');
  todoList2 = [];
  // console.log(todoList2);
  renderHistory();
}

// Learning: The first code failed because the event listeners were added before the remove buttons were created in the DOM. The second code worked because the buttons were created first and then the event listeners were attached.
