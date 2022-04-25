
var em = "admin@gmail.com";
var pass = "admin@123";

var element = document.querySelector(".alert");

function getInfo(e) {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (em == email && pass == password) {
    redirect();
    //    document.write("<h1>Welcome to new page</h1>");
  } else {
    element.classList.remove("hide");
  }
}

function redirect() {
  (document.location.href = "welcome.html"), true;
}

function hidefun() {
  element.classList.add("hide");
}



var MainTodoContainer= document.getElementById('todos');
var input = document.querySelector('.todo_input');
var addingButton = document.querySelector('.add-item');
var deleteAllBin = document.querySelector('.deleteBin');

addingButton.addEventListener('click', function(e){
  
if(input.value.trim()){
  var ulTag = document.createElement('ul');
  ulTag.classList.add('todo-list-container');

  var todoList = document.createElement('div');
  todoList.classList.add('todo-list');

  var liTag =document.createElement('li');
  liTag.innerHTML =input.value;
  liTag.classList.add('todo-item');

  var buttonDiv =document.createElement('div');
  buttonDiv.classList.add('button');
  

  var checkbox = document.createElement("input");
  checkbox.classList.add("checkbox");
  checkbox.type="radio";
  checkbox.onclick= function(){
   
    var inprogress = document.createElement('button');
    inprogress.classList.add('inprogress');
    inprogress.innerHTML='<i class="fa fa-spinner"></i>';
    buttonDiv.appendChild(inprogress);
 


}
  

  var completeButton = document.createElement('button');
  completeButton.classList.add('completed');
  completeButton.innerHTML='<i class="fas fa-check"> </i>';

  var editButton = document.createElement('button');
  editButton.classList.add('editBtn');
  editButton.innerHTML='<i class="fas fa-edit"> </i>';
  editButton.onclick=function(){
    editwork(liTag);
  }

  var trashButton = document.createElement('button');
  trashButton.classList.add('trash');
  trashButton.innerHTML='<i class="fas fa-trash"> </i>';





  ulTag.appendChild(todoList);
  todoList.appendChild(liTag);
  todoList.appendChild(buttonDiv);
  buttonDiv.appendChild(checkbox);
  buttonDiv.appendChild(completeButton);
  buttonDiv.appendChild(editButton);
  buttonDiv.appendChild(trashButton);

  MainTodoContainer.appendChild(ulTag);

  todoList.addEventListener('click',function(e){
    var items =e.target;
    if(items.classList[0] == 'completed'){
      var todo = items.parentElement;
      var todo2 = todo.parentElement;
      todo2.classList.add('line');
      completefun();
     
   
    }else   if(items.classList[0] == 'trash'){
      var todo = items.parentElement;
      var todo2 = todo.parentElement;
      var todo3 = todo2.parentElement;
      todo3.classList.add('drop');
      todo3.addEventListener('transitionend', function(){
        todo3.remove();
    progressbar();
    completefun();

      })
    } 
    progressbar();
  });

 input.value='';
}else if(input.value ===''){
  var element = document.querySelector(".alert");
  element.classList.remove("hide");
}
progressbar();


})

function editwork(e){
  var ditValue = prompt('edit the select item', e.firstChild.nodeValue);
e.firstChild.nodeValue =editValue;

}
function deleteAllElements(){
  var gettingUlTag =document.querySelectorAll('.todo-list-container');
 
    for(var i =0;i< gettingUlTag.length;i++){
    gettingUlTag[i].remove();
    completefun();
   
  }
  progressbar();

  input.value='';
}


function progressbar(){
  var gettingUlTag =document.querySelectorAll('.todo-list-container');
  var creted = document.querySelectorAll('.add-item');
  var completed = document.querySelectorAll('.line');
  var inpro = document.querySelectorAll('.inprogress');
  var deleted = document.querySelectorAll('.drop');
 
  var elem =document.getElementById('bar1') ;
  var total = gettingUlTag.length *10;
  // console.log("total = "+total);
  // console.log("completed = "+completed.length);
  // console.log("inprogress = "+inpro.length);


  var widths = 0;
  
 
     
      
        
        if(widths>=100) {widths = 100;}
       widths=total;    
        elem.style.width = widths + "%";// set the width of the progress bar
      
  
  
}




function completefun(){
 
 
  var completed = document.querySelectorAll('.line');
  
 
  var elem =document.getElementById('bar2') ;

    total = completed.length * 10;

   // console.log("total = "+total);
    // console.log("completed = "+completed.length);
    // console.log("inprogress = "+inpro.length);
      var widths = 0;    
        if(widths>=100) {widths = 100;}
       widths=total;    
        elem.style.width = widths + "%";// set the width of the progress bar
      
  
  
}





























































