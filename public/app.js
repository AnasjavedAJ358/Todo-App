var list = document.getElementById("list")
// add item button///////////////////
function addTodo()
{
 var item = document.getElementById("todoitem")
console.log(item.value)
var li = document.createElement("li")
var item_list = document.createTextNode(item.value)
li.appendChild(item_list)
list.appendChild(li)

var img = document.createElement("img"); 
img.setAttribute("src","del.png")
img.setAttribute("class","btn")
img.setAttribute("onclick","delitem(this)") 
li.appendChild(img);
item.value = "";
///////////////////edit button ////////////////
var editbtn = document.createElement("img")
editbtn.setAttribute("src","edit.jpg")
editbtn.setAttribute("class","edbtn")
editbtn.setAttribute("onclick","edititem(this)")
li.appendChild(editbtn);
}
function delitem(e){
e.parentNode.remove()
}
function deleteall(){
list.innerHTML=""
 }
function edititem(e){
    var val = (e.parentNode.firstChild.nodeValue)
    var edit = prompt("Enter your edit item....",val)
    e.parentNode.firstChild.nodeValue = edit;
console.log(e)
}
