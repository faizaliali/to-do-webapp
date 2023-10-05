var inputbox = document.getElementById("input-box");
var listitems = document.getElementById("list-items");

function addtask() {
    if (inputbox.value == "") {
        alert("Must Add Your Task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listitems.appendChild(li);
        let del = document.createElement("del");
        del.innerHTML = "x";
        li.appendChild(del);
        inputbox.value = "";

        li.querySelector("del").addEventListener("click", remove);

        function remove() {
            li.remove();
        }
    }
}