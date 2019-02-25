document.getElementById("add").onClick = function() {

    var text = document.getElementById("myText").value;

    var li = "<li>" + text + </li>;

    document.getElementById("list").appendChild(li);
}

