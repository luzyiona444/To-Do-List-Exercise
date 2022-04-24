// Create a "close" button and append it to each list item
newInputValue = 0;
var newLi = document.getElementsByTagName("LI");
var i;
for (i = 0; i < newLi.length; i++) {
  var span = document.createElement("SPAN");
  span.className = "close";
  span.appendChild(txt);
  newLi[i].appendChild(span);
}



// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


const newH3 = document.querySelector("h3");
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputText").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("inputText").value = "";
  
  newInputValue++;
  newH3.innerText =" You have added " + newInputValue + " task to your list";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Create a button when click to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    
  }
}


  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      newInputValueDecrease= newInputValue;
      newInputValueDecrease--;
  newH3.innerText =" You have removed " + newInputValueDecrease +
   " task to your list" + " from " + newInputValue + " task of your list";
   newInputValue = newInputValueDecrease;

   if (newInputValueDecrease === 0) {
    newH3.innerText =" Your task list is empty! ";
  } 

    }
  }
}
