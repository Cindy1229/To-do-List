const clear=document.querySelector(".clear");
const dateElement=document.querySelector(".date");
const list=document.getElementById("list");
const input=document.getElementById("input");

const CHECK="check-circle";
const UNCHECK="uncheck-circle";
const LINE_THROUGH="lineThrough";

//List to store to-dos
let LIST, id;
//Restore data from localStorage
let data=localStorage.getItem("TODO");
if (data) {
  LIST=JSON.parse(data);
  //Load the LIST to the page
  loadToDo(LIST);
  id=LIST.length;
} else {
  LIST=[];
  id=0;
}

//Load
function loadToDo(array){
  array.forEach(function(item) {
    addToDo(item.name, item.id, item.done, item.trash);
  });

}

//clear
clear.addEventListener('click', function() {
  localStorage.clear();
});


//Add the todo text to the list
function addToDo(toDo, id, done, trash) {
  if(trash){return;}

  const DONE=done?CHECK:UNCHECK;
  const LINE=done?LINE_THROUGH:"";

  const text=`<li class="item">
                <i class="fa ${DONE} complete" job="complete" id="${id}"></i>
                <p class="text ${LINE}">${toDo}</p>
                <i class="fa trash delete" job="delete" id="${id}"></i>
              </li>`
  const position="beforeend";
  list.insertAdjacentHTML(position, text);

}

//Enter key listener
document.addEventListener('keyup', function(e) {
  if(e.keyCode==13){
    const toDo=input.value;
    //Add the input text to the list
    if (toDo) {
      addToDo(toDo, id, false, false);
      LIST.push(
        {
          name: toDo,
          id: id,
          done: false,
          trash: false
        }
      );
      id++;
      //Empty the input
      input.value="";
    }
  }
});

//Complete todo item
function completeToDo(element) {
  element.toggle(CHECK);
  element.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

  LIST[element.id].done=LIST[element.id].done?false:true;

}

//Remove the to-do item
function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].trash=true;
}

//Target any list elements dynamically
list.addEventListener('click', function(e) {
  const elementJOB=e.target.attributes.job.value;
  //Update local storage
  localStorage.setItem("TODO", JSON.stringify(LIST));

  if (elementJOB=="complete") {
    completeToDo(e.target);
  } else if(elementJOB=="delete"){
    removeToDo(e.target);
  }
});
