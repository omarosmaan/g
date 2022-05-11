//selectors
const todoBtn=document.querySelector(".todo-button");
const todoInput=document.querySelector(".todo-input");
const todoList=document.querySelector(".todo-list");



//event lesteners
todoBtn.addEventListener('click' , addTask);
todoList.addEventListener('click', checkordelete)

//function 
function addTask(e) {
    e.preventDefault();
    
//creat li
const todoli=document.createElement("li");
todoli.classList.add("todo");

//creat div
const tododiv=document.createElement("div");
tododiv.classList.add('todo-item');

//add input value to div
tododiv.innerText=todoInput.value;

//creat button complete
const completeBtn=document.createElement("button");
completeBtn.classList.add('complete-btn');
completeBtn.innerHTML='<i class="fa-solid fa-check"></i>';

//creat trash button
const trashBtn=document.createElement("button");
trashBtn.classList.add('trash-btn');
trashBtn.innerHTML='<i class="fa-solid fa-trash"></i>';

//add div + button1 + button2 --> li
todoli.appendChild(completeBtn)
todoli.appendChild(trashBtn)
todoli.appendChild(tododiv);
todoli.appendChild(completeBtn);
todoli.appendChild(trashBtn);

//add li --> ul
todoList.appendChild(todoli);

//remove input value 
todoInput.value = "";
}

function checkordelete(e){
    const item=e.target;

    if (item.classList[0]=== "complete-btn"){
    const todo =item.parentElement;
    todo.classList.toggle("completed");
    }
    if (item.classList[0]=== "trash-btn"){
    const todo =item.parentElement;
    todo.classList.toggle("fall");
    todo.addEventListener("transitionend", ()=>{
        todo.remove();
    })
    }
}