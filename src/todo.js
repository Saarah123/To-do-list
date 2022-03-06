import ("./todo.css");
import logo from "./logo.png";
document.getElementById("logo").src= logo ;



document.querySelector("#myForm").addEventListener("submit", addItem);
var arr = JSON.parse(localStorage.getItem("todoList"))||[];
  displayTable(arr);

function addItem(event) {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var qty = document.querySelector("#qty").value;
  var priority = document.querySelector("#priority").value;
  var todoObj = {
    itemName: name,
    itemQty: qty,
    itemPriority: priority,
  };
  arr.push(todoObj);

  console.log(arr);

  localStorage.setItem("todoList", JSON.stringify(arr));

  displayTable(arr);
}

function displayTable(arr) {
  document.querySelector("tbody").innerHTML = "";
  arr.map(function (elem) {
    var row = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.textContent = elem.itemName;
    var td2 = document.createElement("td");
    td2.textContent = elem.itemQty;
    var td3 = document.createElement("td");
    td3.textContent = elem.itemPriority;
    if (priority == "high") {
      td3.style.backgroundColor = "red";
    }
    else if(priority=="medium"){
          td3.style.backgroundColor = "greenyellow"
      }
      else if(priority=="low"){td3.style.backgroundColor = "yellow"}
    var td4 = document.createElement("td");
    td4.textContent = "Delete";
    td4.addEventListener("click", deleteTask);

    row.append(td1, td2, td3, td4);

    document.querySelector("tbody").append(row);
  });
}

  function deleteTask(event) {
    //console.log(event.target.parentNode);
    event.target.parentNode.remove();
  }




