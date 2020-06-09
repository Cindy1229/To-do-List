const clear=document.querySelector(".clear");
const dateElement=document.querySelector(".date");
const list=document.getElementById("list");
const input=document.getElementById("input");

//List to store to-dos
let LIST=[];
let id=0;

const CHECK="check-circle";
const UNCHECK="uncheck-circle";
const LINE_THROUGH="lineThrough";


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



}
