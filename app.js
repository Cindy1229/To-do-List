const clear=document.querySelector(".clear");
const dateElement=document.querySelector(".date");
const list=document.getElementById("list");
const input=document.getElementById("input");

//Add the todo text to the list
function addToDo(toDo) {
  const text=`<li class="item">
                <i class="check" job="complete"></i>
                <p class="text">${toDo}</p>
                <i class="trash" job="delete"></i>
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
      addToDo(toDo)
    }
    //Empty the input
    input.value="";
  }
});
