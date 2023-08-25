const con='';
const due='';
const todoList=[{}];
// document.querySelector('.js-todo-list');
function addTodo(){
//    const inputElement=document.querySelector('.js-todo-list').innerHTML=todoListHtml;
   const inputValue=document.querySelector('.js-name-input')
   const con=document.querySelector('.js-input-value').innerHTML=inputValue.value;
   const date_input=document.querySelector('.js-input-date')
   const due=date_input.value;
   console.log(due)
   const name=console.log(inputValue.value)
   const date_value=document.querySelector('.js-date-value').innerHTML=due
   todoList.push({
    name:con,
    date:due
})
  console.log(todoList);
   const form = document.getElementById('dt');
if(con&&due){
  if (form.style.visibility === 'hidden') {
    form.style.visibility = 'visible';
  }
 }
  else {
    form.style.visibility = 'hidden';
  } 

  
}
function todoDelete(){
    document.getElementById('inp').innerHTML="";
    document.getElementById('dat').innerHTML="";
    const inputValue=document.querySelector('.js-name-input')
inputValue.value="";
const date_input=document.querySelector('.js-input-date')
date_input.value="";

}




// const btn = document.getElementById('at');

// btn.addEventListener('click', () => {
//   const form = document.getElementById('dt');

//   if (form.style.visibility === 'hidden') {
//     form.style.visibility = 'visible';
//   } else {
//     form.style.visibility = 'hidden';
//   }
// });